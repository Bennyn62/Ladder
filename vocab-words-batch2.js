// Batch 2: words 41-80, level 1 (top-frequency content words).
// Same icon set as batch 1 where a shape already fits; a few new icons added below.
// Merge this array into WORDS in the main app, or load as a separate level-1-part2 deck.

const NEW_ICONS = {
  water:'<path d="M20 6c6 8 11 14 11 20a11 11 0 0 1-22 0c0-6 5-12 11-20z"/>',
  eye:'<path d="M4 20s6-11 16-11 16 11 16 11-6 11-16 11S4 20 4 20z"/><circle cx="20" cy="20" r="5"/>',
  hand:'<path d="M14 22V10a2.5 2.5 0 0 1 5 0v8M19 18V8a2.5 2.5 0 0 1 5 0v10M24 19V11a2.5 2.5 0 0 1 5 0v11c0 7-4 12-10 12s-9-3-11-7l-3-6c-1-2 1-4 3-3l3 3"/>',
  book:'<path d="M8 8h12a4 4 0 0 1 4 4v20a4 4 0 0 0-4-4H8z"/><path d="M32 8H20a4 4 0 0 0-4 4v20a4 4 0 0 1 4-4h12z"/>',
  house:'<path d="M8 18l12-11 12 11"/><path d="M11 16v16h18V16"/>',
  money:'<rect x="6" y="12" width="28" height="16" rx="3"/><circle cx="20" cy="20" r="4.5"/>',
  road:'<path d="M14 34l4-28h4l4 28"/><path d="M20 12v3M20 19v3M20 26v3"/>',
  city:'<rect x="6" y="16" width="8" height="18"/><rect x="16" y="8" width="8" height="26"/><rect x="26" y="20" width="8" height="14"/>',
  weather:'<circle cx="16" cy="16" r="7"/><path d="M27 24a6 6 0 0 0-1-11.9A9 9 0 0 0 9 15"/><path d="M27 24H14a5 5 0 1 0 0 10h13a5 5 0 0 0 0-10z"/>',
  music:'<circle cx="12" cy="28" r="4"/><circle cx="28" cy="24" r="4"/><path d="M16 28V10l16-3v17"/>',
  phone:'<rect x="12" y="4" width="16" height="32" rx="3"/><path d="M18 32h4"/>',
  food:'<path d="M12 6v14a4 4 0 0 0 8 0V6M16 6v10"/><path d="M28 6c-3 0-5 4-5 9s2 7 5 7v14"/>',
  travel:'<path d="M6 24l28-14-11 28-4-11-13-3z"/>',
  school:'<path d="M4 16l16-8 16 8-16 8z"/><path d="M12 20v8c0 2 4 4 8 4s8-2 8-4v-8"/>',
  health:'<path d="M20 8v24M8 20h24"/><rect x="6" y="6" width="28" height="28" rx="6"/>',
  law:'<path d="M20 6v28M10 34h20"/><path d="M20 10L8 15l4 10a6 6 0 0 0 8 0z"/><path d="M20 10l12 5-4 10a6 6 0 0 1-8 0z"/>'
};

const WORDS_BATCH2 = [
  {en:"water", pos:"noun", he:"מים", icon:"water", exEn:"Please drink more water today.", exHe:"נא לשתות יותר מים היום.", assoc:"נשמע כמו \"ווטרפול\" (waterfall) - מפל מים."},
  {en:"eye", pos:"noun", he:"עין", icon:"eye", exEn:"She has bright green eyes.", exHe:"יש לה עיניים ירוקות בהירות.", assoc:"נשמע כמו \"אַיי\" - דמיין שהעין אומרת \"אני רואה\" (I see)."},
  {en:"hand", pos:"noun", he:"יד", icon:"hand", exEn:"He shook my hand firmly.", exHe:"הוא לחץ את ידי בחוזקה.", assoc:"\"האנד-מייד\" (handmade) - עשוי ביד (hand)."},
  {en:"book", pos:"noun", he:"ספר", icon:"book", exEn:"I'm reading a great book.", exHe:"אני קורא ספר מצוין.", assoc:"נשמע כמו \"בּוּק\" - כמו להזמין (book) שולחן, פותחים דף חדש."},
  {en:"house", pos:"noun", he:"בית", icon:"house", exEn:"They bought a new house.", exHe:"הם קנו בית חדש.", assoc:"\"האוס פארטי\" (house party) - מסיבה בבית (house)."},
  {en:"money", pos:"noun", he:"כסף", icon:"money", exEn:"He doesn't have much money.", exHe:"אין לו הרבה כסף.", assoc:"נשמע כמו \"מָני\" - הרבה (many) כסף זה מטרה של כולם."},
  {en:"road", pos:"noun", he:"כביש / דרך", icon:"road", exEn:"The road was closed for repairs.", exHe:"הכביש נסגר לתיקונים.", assoc:"\"רודטריפ\" (road trip) - טיול בדרך (road)."},
  {en:"city", pos:"noun", he:"עיר", icon:"city", exEn:"New York is a huge city.", exHe:"ניו יורק היא עיר ענקית.", assoc:"נשמע כמו \"סיטי\" - כבר מוכר מ\"סיטי סנטר\" (עיר)."},
  {en:"weather", pos:"noun", he:"מזג אוויר", icon:"weather", exEn:"The weather is nice today.", exHe:"מזג האוויר נחמד היום.", assoc:"מכיל \"wear\" (ללבוש) - בוחרים מה ללבוש לפי מזג האוויר (weather)."},
  {en:"music", pos:"noun", he:"מוזיקה", icon:"music", exEn:"She listens to music every morning.", exHe:"היא מאזינה למוזיקה כל בוקר.", assoc:"מילה כמעט זהה בעברית - \"מוזיקה\" = music."},
  {en:"phone", pos:"noun", he:"טלפון", icon:"phone", exEn:"Can I use your phone?", exHe:"אפשר להשתמש בטלפון שלך?", assoc:"מילה כמעט זהה בעברית - \"טלפון\" = phone."},
  {en:"food", pos:"noun", he:"אוכל", icon:"food", exEn:"The food here is delicious.", exHe:"האוכל כאן טעים.", assoc:"נשמע כמו \"פוד\" - כמו \"פודי\" (foodie), חובב אוכל (food)."},
  {en:"travel", pos:"verb / noun", he:"לטייל / טיול", icon:"travel", exEn:"I love to travel abroad.", exHe:"אני אוהב לטייל בחו״ל.", assoc:"מכיל \"trav\" - כמו \"traverse\" (לחצות) - טיול (travel) חוצה מקומות."},
  {en:"school", pos:"noun", he:"בית ספר", icon:"school", exEn:"My kids walk to school.", exHe:"הילדים שלי הולכים ברגל לבית הספר.", assoc:"נשמע כמו \"סקול\" - דמיין פעמון בית ספר (school) מצלצל."},
  {en:"health", pos:"noun", he:"בריאות", icon:"health", exEn:"Exercise is good for your health.", exHe:"פעילות גופנית טובה לבריאות שלך.", assoc:"מכיל \"heal\" (להירפא) - בריאות (health) קשורה להחלמה."},
  {en:"law", pos:"noun", he:"חוק", icon:"law", exEn:"It's against the law to do that.", exHe:"זה נגד החוק לעשות את זה.", assoc:"נשמע כמו \"לוֹ\" - דמיין שופט אומר \"לא\" (law = לא לעבור על החוק)."}
];

export { WORDS_BATCH2, NEW_ICONS };
