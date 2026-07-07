// vocab-firebase.js
// Firestore integration for the vocabulary app.
// Drop-in module - import the functions you need per screen.
// Assumes Firebase v9+ modular SDK, already initialized elsewhere
// (reuse the same firebaseConfig / app instance as eWay if sharing a project).

import {
  getFirestore, doc, getDoc, setDoc, updateDoc,
  collection, addDoc, getDocs, query, orderBy, limit, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const db = getFirestore();

/* ---------- FAMILY / PROFILES ---------- */

export async function createProfile(familyCode, { name, age, mode, level }) {
  const profilesRef = collection(db, "families", familyCode, "profiles");
  const docRef = await addDoc(profilesRef, {
    name, age, mode, level,
    createdAt: serverTimestamp()
  });
  return docRef.id;
}

export async function getProfiles(familyCode) {
  const snap = await getDocs(collection(db, "families", familyCode, "profiles"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function updateProfileLevel(familyCode, profileId, level) {
  await updateDoc(doc(db, "families", familyCode, "profiles", profileId), { level });
}

/* ---------- PROGRESS (per word, per profile) ---------- */
// Stored at families/{code}/profiles/{profileId}/progress/{wordId}

export async function getWordProgress(familyCode, profileId, wordId) {
  const ref = doc(db, "families", familyCode, "profiles", profileId, "progress", wordId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// SM-2-style update. rating: "again" | "hard" | "good" | "easy"
export async function updateWordProgress(familyCode, profileId, wordId, rating) {
  const ref = doc(db, "families", familyCode, "profiles", profileId, "progress", wordId);
  const existing = await getDoc(ref);
  const prev = existing.exists() ? existing.data() : { interval: 0, easeFactor: 2.5, reps: 0 };

  const intervals = { again: 0, hard: 1, good: 3, easy: 7 };
  const easeDelta = { again: -0.3, hard: -0.15, good: 0, easy: 0.15 };

  const newEase = Math.max(1.3, (prev.easeFactor || 2.5) + easeDelta[rating]);
  const baseInterval = rating === "again" ? 0 : Math.max(1, Math.round((prev.interval || 1) * newEase));
  const interval = intervals[rating] && prev.reps === 0 ? intervals[rating] : baseInterval;

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  await setDoc(ref, {
    interval,
    easeFactor: newEase,
    reps: (prev.reps || 0) + 1,
    lastRating: rating,
    lastSeen: serverTimestamp(),
    nextReview
  }, { merge: true });
}

// Words due for review today (or never studied) - feed this into the study queue.
export async function getDueWords(familyCode, profileId, allWordIds) {
  const now = new Date();
  const due = [];
  for (const wordId of allWordIds) {
    const progress = await getWordProgress(familyCode, profileId, wordId);
    if (!progress || !progress.nextReview || progress.nextReview.toDate() <= now) {
      due.push(wordId);
    }
  }
  return due;
}

/* ---------- SESSIONS (activity log, feeds the admin dashboard) ---------- */

export async function logSession(familyCode, profileId, { category, correctCount, wrongCount, wordsShown, durationSeconds }) {
  const sessionsRef = collection(db, "families", familyCode, "sessions");
  await addDoc(sessionsRef, {
    profileId, category, correctCount, wrongCount, wordsShown, durationSeconds,
    date: serverTimestamp()
  });
}

export async function getRecentSessions(familyCode, profileId, max = 20) {
  const q = query(
    collection(db, "families", familyCode, "sessions"),
    orderBy("date", "desc"),
    limit(max)
  );
  const snap = await getDocs(q);
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .filter(s => s.profileId === profileId);
}

/* ---------- ADMIN DASHBOARD AGGREGATION ---------- */
// Computes the stats the dashboard prototype needs from raw sessions + progress.
// For a small family (few kids, hundreds of sessions) client-side aggregation
// is fine - no Cloud Functions needed at this scale.

export async function getChildStats(familyCode, profileId, allWordIds) {
  const sessions = await getRecentSessions(familyCode, profileId, 200);
  const totalCorrect = sessions.reduce((sum, s) => sum + (s.correctCount || 0), 0);
  const totalAnswered = sessions.reduce((sum, s) => sum + (s.correctCount || 0) + (s.wrongCount || 0), 0);
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  let mastered = 0;
  const wordAccuracy = [];
  for (const wordId of allWordIds) {
    const p = await getWordProgress(familyCode, profileId, wordId);
    if (p && p.interval >= 7) mastered++;
    if (p && p.reps >= 2) {
      wordAccuracy.push({ wordId, easeFactor: p.easeFactor, reps: p.reps });
    }
  }

  const hardWords = wordAccuracy
    .sort((a, b) => a.easeFactor - b.easeFactor)
    .slice(0, 5);

  return { mastered, total: allWordIds.length, accuracy, hardWords, sessionCount: sessions.length };
}
