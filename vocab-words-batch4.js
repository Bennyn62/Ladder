// Batch 4: words 105-128, level 1 (total so far: 104 -> 128).

const NEW_ICONS_B4 = {
  hope:'<path d="M20 6c6 8 11 14 11 20a11 11 0 0 1-22 0c0-6 5-12 11-20z"/><path d="M15 24c1 3 3 4 5 4"/>',
  learn:'<path d="M4 14l16-7 16 7-16 7z"/><path d="M12 18v7c0 2 4 4 8 4s8-2 8-4v-7"/><path d="M34 14v9"/>',
  understand:'<circle cx="20" cy="20" r="14"/><path d="M14 22l4 4 8-10"/>',
  explain:'<path d="M8 10h24v16H16l-6 6v-6H8z"/><path d="M16 18h8M16 22h5"/>',
  example:'<circle cx="14" cy="14" r="3"/><circle cx="14" cy="26" r="3"/><circle cx="26" cy="20" r="3"/><path d="M17 14h6a3 3 0 0 1 3 3v0M17 26h6a3 3 0 0 0 3-3v0"/>',
  history:'<circle cx="20" cy="20" r="14"/><path d="M20 12v8l5 3"/><path d="M8 12a14 14 0 0 0-2 6"/>',
  science:'<path d="M16 6v10l-9 16a3 3 0 0 0 3 5h20a3 3 0 0 0 3-5l-9-16V6"/><path d="M14 6h12"/><path d="M14 24h12"/>',
  language:'<circle cx="20" cy="20" r="14"/><path d="M6 20h28M20 6c4 5 4 23 0 28M20 6c-4 5-4 23 0 28"/><path d="M12 12c3 2 13 2 16 0M12 28c3-2 13-2 16 0"/>',
  picture:'<rect x="6" y="8" width="28" height="22" rx="2"/><circle cx="14" cy="16" r="3"/><path d="M8 26l8-8 6 6 5-5 7 7"/>',
  story:'<rect x="8" y="6" width="24" height="28" rx="2"/><path d="M13 13h14M13 19h14M13 25h9"/>',
  market:'<path d="M6 14h28l-3 8H9z"/><path d="M9 22l2 8h18l2-8"/><circle cx="15" cy="34" r="1.6" fill="var(--primary)" stroke="none"/><circle cx="25" cy="34" r="1.6" fill="var(--primary)" stroke="none"/>',
  student:'<path d="M4 16l16-7 16 7-16 7z"/><path d="M12 18v7c0 2 4 4 8 4s8-2 8-4v-7"/>',
  teacher:'<circle cx="20" cy="12" r="5"/><path d="M9 33c0-8 5-13 11-13s11 5 11 13"/><path d="M14 21h12"/>',
  doctor:'<circle cx="20" cy="12" r="5"/><path d="M9 33c0-7 5-12 11-12s11 5 11 12"/><path d="M20 20v8M16 24h8"/>',
  problem:'<circle cx="20" cy="20" r="14"/><path d="M16 15a4 4 0 1 1 6 3c-1 1-2 2-2 4"/><circle cx="20" cy="27" r="0.9" fill="var(--again)" stroke="none"/>',
  answer:'<circle cx="20" cy="20" r="14"/><path d="M13 20l5 5 9-11"/>',
  idea:'<path d="M20 6a10 10 0 0 0-6 18c1 1 2 3 2 5h8c0-2 1-4 2-5a10 10 0 0 0-6-18z"/><path d="M17 33h6"/><path d="M20 3v2M32 8l-1.5 1.5M8 8l1.5 1.5"/>',
  morning:'<circle cx="20" cy="24" r="7"/><path d="M6 24h4M30 24h4M12 24a8 8 0 0 1 16 0"/><path d="M14 34h12"/>',
  night:'<path d="M28 8a13 13 0 1 0 8 20 11 11 0 0 1-8-20z"/><path d="M30 6l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"/>',
  week:'<rect x="7" y="10" width="26" height="21" rx="3"/><path d="M7 17h26M13 7v6M27 7v6"/><path d="M13 22h3M20 22h3M27 22h0"/>',
  month:'<rect x="7" y="10" width="26" height="21" rx="3"/><path d="M7 17h26M13 7v6M27 7v6"/><path d="M13 22h14"/>',
  area:'<rect x="8" y="8" width="24" height="24" rx="2"/><path d="M8 8l24 24M32 8L8 32"/>',
  group:'<circle cx="14" cy="14" r="4"/><circle cx="26" cy="14" r="4"/><circle cx="20" cy="24" r="4"/><path d="M9 32c0-4 2-6 5-6M31 32c0-4-2-6-5-6M14 32c0-4 3-6 6-6s6 2 6 6"/>',
  moment:'<circle cx="20" cy="20" r="14"/><path d="M20 20l4-7"/><circle cx="20" cy="20" r="1.6" fill="var(--primary)" stroke="none"/>'
};

const WORDS_BATCH4 = [
  {en:"hope", pos:"verb / noun", he:"לקוות / תקווה", icon:"hope", exEn:"I hope you feel better soon.", exHe:"אני מקווה שתרגיש טוב יותר בקרוב.", assoc:"מכיל \"pope\" קרוב בכתיב - גם דמות שמייצגת תקווה (hope) לרבים."},
  {en:"learn", pos:"verb", he:"ללמוד", icon:"learn", exEn:"Children learn languages quickly.", exHe:"ילדים לומדים שפות מהר.", assoc:"מכיל \"earn\" (להרוויח) - לומדים (learn) כדי \"להרוויח\" ידע."},
  {en:"understand", pos:"verb", he:"להבין", icon:"understand", exEn:"I don't understand this question.", exHe:"אני לא מבין את השאלה הזו.", assoc:"מילולית: under+stand = \"לעמוד מתחת\" - להבין (understand) יסודות של דבר."},
  {en:"explain", pos:"verb", he:"להסביר", icon:"explain", exEn:"Can you explain this again?", exHe:"תוכל להסביר את זה שוב?", assoc:"מכיל \"plain\" (פשוט) - להסביר (explain) = להפוך למשהו פשוט."},
  {en:"example", pos:"noun", he:"דוגמה", icon:"example", exEn:"Give me an example, please.", exHe:"תן/י לי דוגמה, בבקשה.", assoc:"מילה כמעט זהה - \"אקזמפל\" נשמע כמו \"example\" בעברית מדוברת."},
  {en:"history", pos:"noun", he:"היסטוריה", icon:"history", exEn:"She studies ancient history.", exHe:"היא לומדת היסטוריה עתיקה.", assoc:"מכיל \"story\" (סיפור) - היסטוריה (history) היא סיפור העבר."},
  {en:"science", pos:"noun", he:"מדע", icon:"science", exEn:"He loves science and math.", exHe:"הוא אוהב מדע ומתמטיקה.", assoc:"נשמע כמו \"סָיינס\" - כבר מוכר מ\"מדע בדיוני\" (science fiction)."},
  {en:"language", pos:"noun", he:"שפה", icon:"language", exEn:"English is a global language.", exHe:"אנגלית היא שפה גלובלית.", assoc:"מכיל \"lang\" - קרוב לגרמנית \"lang\" (ארוך), שפה לומדים לאורך זמן."},
  {en:"picture", pos:"noun", he:"תמונה", icon:"picture", exEn:"He took a picture of the sunset.", exHe:"הוא צילם תמונה של השקיעה.", assoc:"מכיל \"pict\" - כמו \"painting\" (ציור), תמונה (picture) חזותית."},
  {en:"story", pos:"noun", he:"סיפור", icon:"story", exEn:"She told us a funny story.", exHe:"היא סיפרה לנו סיפור מצחיק.", assoc:"נשמע כמו \"סטורי\" - כבר מוכר מ\"סטורי\" באינסטגרם (story)."},
  {en:"market", pos:"noun", he:"שוק", icon:"market", exEn:"We buy vegetables at the market.", exHe:"אנחנו קונים ירקות בשוק.", assoc:"מכיל \"mark\" (סימון) - בשוק (market) מסמנים מחירים."},
  {en:"student", pos:"noun", he:"תלמיד / סטודנט", icon:"student", exEn:"She's a student at the university.", exHe:"היא סטודנטית באוניברסיטה.", assoc:"מילה כמעט זהה - \"סטודנט\" = student."},
  {en:"teacher", pos:"noun", he:"מורה", icon:"teacher", exEn:"My teacher is very patient.", exHe:"המורה שלי מאוד סבלנית.", assoc:"מכיל \"teach\" (ללמד) - מורה (teacher) הוא מי שמלמד."},
  {en:"doctor", pos:"noun", he:"רופא", icon:"doctor", exEn:"I need to see a doctor.", exHe:"אני צריך לפגוש רופא.", assoc:"מילה כמעט זהה - \"דוקטור\" = doctor."},
  {en:"problem", pos:"noun", he:"בעיה", icon:"problem", exEn:"We have a small problem.", exHe:"יש לנו בעיה קטנה.", assoc:"מילה כמעט זהה - \"פרובלם\" נשמע כמו \"בעיה\"."},
  {en:"answer", pos:"noun / verb", he:"תשובה / לענות", icon:"answer", exEn:"She gave the correct answer.", exHe:"היא נתנה את התשובה הנכונה.", assoc:"מכיל \"swear\" חלקית - תשובה (answer) שנשבעים שהיא נכונה."},
  {en:"idea", pos:"noun", he:"רעיון", icon:"idea", exEn:"That's a great idea!", exHe:"זה רעיון מצוין!", assoc:"מילה כמעט זהה - \"אידיאה\" = idea, כבר מוכר בעברית."},
  {en:"morning", pos:"noun", he:"בוקר", icon:"morning", exEn:"Good morning, how are you?", exHe:"בוקר טוב, מה שלומך?", assoc:"מכיל \"mourn\" בכתיב דומה - אבל morning זה הפוך: שמש עולה (בוקר)."},
  {en:"night", pos:"noun", he:"לילה", icon:"night", exEn:"We watched the stars at night.", exHe:"צפינו בכוכבים בלילה.", assoc:"נשמע כמו \"נַייט\" - כמו \"nightclub\" (מועדון לילה)."},
  {en:"week", pos:"noun", he:"שבוע", icon:"week", exEn:"See you next week.", exHe:"נתראה בשבוע הבא.", assoc:"מכיל \"weak\" (חלש) בהגייה זהה - שבוע (week) עובר וגורם לעייפות."},
  {en:"month", pos:"noun", he:"חודש", icon:"month", exEn:"This is a busy month for work.", exHe:"זה חודש עמוס בעבודה.", assoc:"מכיל \"moon\" (ירח) - חודש (month) מבוסס במקור על מחזור הירח."},
  {en:"area", pos:"noun", he:"אזור", icon:"area", exEn:"This area is very quiet.", exHe:"האזור הזה שקט מאוד.", assoc:"נשמע כמו \"אֵריָה\" - כבר מוכר מ\"ריאה\"... לא, פשוט: אזור (area) = שטח מוגדר."},
  {en:"group", pos:"noun", he:"קבוצה", icon:"group", exEn:"They work well as a group.", exHe:"הם עובדים טוב כקבוצה.", assoc:"נשמע כמו \"גרופ\" - כבר מוכר מ\"גרופ\" בוואטסאפ (group)."},
  {en:"moment", pos:"noun", he:"רגע", icon:"moment", exEn:"Wait a moment, please.", exHe:"רגע אחד, בבקשה.", assoc:"מכיל \"movement\" חלקית - רגע (moment) הוא נקודת זמן שזזה מהר."}
];

export { WORDS_BATCH4, NEW_ICONS_B4 };
