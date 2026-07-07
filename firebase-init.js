// firebase-init.js
// One-time setup: fill in your config below, then every other module
// (vocab-firebase.js) just calls getFirestore() and it uses this app instance.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// ---- OPTION A: reuse the same Firebase project as eWay (b2ft-19e16) ----
// Pros: one project to manage, one bill, rules can cover both apps.
// Cons: you must deploy the combined firestore.rules (this app's rules +
// eWay's existing rules) together - deploying replaces the whole ruleset.
//
// ---- OPTION B: separate Firebase project for the vocab app ----
// Pros: fully isolated, no risk of touching eWay's data/rules.
// Cons: another project to set up in the Firebase console.
//
// Either way, get the config object from:
// Firebase Console -> Project settings -> General -> "Your apps" -> SDK setup and configuration

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",       // e.g. "b2ft-19e16" if reusing eWay's project
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export { app };

/* ---------------------------------------------------------------------
   HOW TO WIRE THIS INTO ANY OF THE HTML PROTOTYPES:

   1. Add near the top of <head> (or before your other <script>s):
        <script type="module" src="firebase-init.js"></script>

   2. In the prototype's own <script>, change it to type="module" and add:
        import { ALL_WORDS, iconSvg } from './vocab-data.js';
        import { updateWordProgress, logSession, getDueWords } from './vocab-firebase.js';

   3. Replace the local WORDS array / iconSvg() definitions in the
      prototype with the imported ones from vocab-data.js.

   4. In the rating button handler (ratingsEl click listener), after
      stats[btn.dataset.rate]++, add:
        await updateWordProgress(familyCode, profileId, deck[idx].id, btn.dataset.rate);

   5. In showDone(), add:
        await logSession(familyCode, profileId, {
          category: 'level-' + currentLevel,
          correctCount: stats.good + stats.easy,
          wrongCount: stats.hard + stats.again,
          wordsShown: deck.map(w => w.id),
          durationSeconds: Math.round((Date.now() - sessionStartTime) / 1000)
        });

   6. familyCode and profileId come from the profile-selection screen -
      pass them via URL params (?family=BENNY&profile=noa) when navigating
      from profile-selection-prototype.html into the study screens, and
      read them with `new URLSearchParams(location.search)` on load.

   Deploy the rules once via Firebase CLI:
     firebase deploy --only firestore:rules
--------------------------------------------------------------------- */
