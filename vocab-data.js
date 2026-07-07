// vocab-data.js — consolidated word bank, all batches merged.
// Auto-assembled from batches 1-5. Import ALL_WORDS + ALL_ICONS wherever the app needs the deck.

const ICONS_BASE = {
  time:'<path d="M20 6a14 14 0 1 0 0 28 14 14 0 0 0 0-28z"/><path d="M20 12v8l6 4"/>',
  person:'<circle cx="20" cy="13" r="6"/><path d="M9 32c0-7 5-11 11-11s11 4 11 11"/>',
  calendar:'<rect x="7" y="10" width="26" height="21" rx="3"/><path d="M7 17h26M14 7v6M26 7v6"/>',
  briefcase:'<rect x="6" y="14" width="28" height="17" rx="3"/><path d="M15 14v-3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3M6 22h28"/>',
  heart:'<path d="M20 32s-11-6.5-11-15a7 7 0 0 1 11-5.5A7 7 0 0 1 31 17c0 8.5-11 15-11 15z"/><path d="M13 19h4l2-4 3 7 2-3h5"/>',
  globe:'<circle cx="20" cy="20" r="13"/><path d="M7 20h26M20 7c4 4 4 22 0 26M20 7c-4 4-4 22 0 26"/>',
  users:'<circle cx="14" cy="14" r="5"/><circle cx="27" cy="16" r="4"/><path d="M6 33c0-6 4-10 8-10s8 4 8 10M22 33c0-5 3-8 8-8s7 3 7 8"/>',
  sun:'<circle cx="20" cy="20" r="7"/><path d="M20 4v4M20 32v4M4 20h4M32 20h4M9 9l3 3M28 28l3 3M31 9l-3 3M12 28l-3 3"/>',
  bulb:'<path d="M20 6a10 10 0 0 0-6 18c1 1 2 3 2 5h8c0-2 1-4 2-5a10 10 0 0 0-6-18z"/><path d="M17 33h6"/>',
  box:'<rect x="10" y="16" width="20" height="15" rx="2"/><path d="M15 16v-3a5 5 0 0 1 10 0v3"/>',
  burst:'<path d="M20 5l3 10 10 3-10 3-3 10-3-10-10-3 10-3z"/>',
  pen:'<path d="M8 32l3-9 16-16 6 6-16 16-9 3z"/><path d="M24 10l6 6"/>',
  gift:'<rect x="8" y="16" width="24" height="16" rx="2"/><path d="M8 22h24M20 16v16M14 16c0-4 3-6 6-4 3-2 6 0 6 4"/>',
  fork:'<path d="M20 34V18M20 18l-9-10M20 18l9-10"/>',
  arrowup:'<path d="M20 30V10M14 16l6-6 6 6"/><path d="M12 30h16"/>',
  anchor:'<circle cx="20" cy="9" r="3"/><path d="M20 12v20M12 22a8 8 0 0 0 16 0M8 18h6M26 18h6"/>',
  bars:'<path d="M9 31V21M18 31V15M27 31V9"/>',
  question:'<circle cx="20" cy="20" r="14"/><path d="M16 15a4 4 0 1 1 6 3c-1 1-2 2-2 4"/><circle cx="20" cy="27" r="0.8" fill="var(--primary)" stroke="none"/>',
  dice:'<rect x="9" y="9" width="22" height="22" rx="4"/><circle cx="15" cy="15" r="1.4" fill="var(--primary)" stroke="none"/><circle cx="25" cy="15" r="1.4" fill="var(--primary)" stroke="none"/><circle cx="15" cy="25" r="1.4" fill="var(--primary)" stroke="none"/><circle cx="25" cy="25" r="1.4" fill="var(--primary)" stroke="none"/><circle cx="20" cy="20" r="1.4" fill="var(--primary)" stroke="none"/>',
  target:'<circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="7"/><circle cx="20" cy="20" r="1.6" fill="var(--primary)" stroke="none"/>',
  grid:'<rect x="8" y="8" width="24" height="24" rx="3"/><path d="M20 8v24M8 20h24"/>',
  badge:'<path d="M20 6l3.5 7 7.5 1-5.5 5.5 1.5 7.5-7-4-7 4 1.5-7.5L9 14l7.5-1z"/>',
  community:'<circle cx="14" cy="14" r="4"/><circle cx="26" cy="14" r="4"/><circle cx="20" cy="24" r="4"/><path d="M9 32c0-4 2-6 5-6M31 32c0-4-2-6-5-6M14 32c0-4 3-6 6-6s6 2 6 6"/>',
  building:'<path d="M8 16l12-9 12 9M8 32V16h24v16"/><path d="M12 20v8M20 20v8M28 20v8M6 32h28"/>',
  check:'<circle cx="20" cy="20" r="13"/><path d="M14 20l4 4 8-8"/>',
  shield:'<path d="M20 6l11 4v9c0 8-5 13-11 15-6-2-11-7-11-15v-9z"/><path d="M15 20l4 4 7-8"/>',
  mountain:'<path d="M5 30l10-16 6 8 4-5 10 13z"/>',
  overlap:'<circle cx="16" cy="20" r="10"/><circle cx="24" cy="20" r="10"/>',
  intlglobe:'<circle cx="18" cy="20" r="12"/><path d="M6 20h24M18 8c3 4 3 20 0 24M18 8c-3 4-3 20 0 24"/><path d="M30 10v10l6-3-6-3z" fill="var(--primary)" stroke="none"/>',
  circle:'<circle cx="20" cy="20" r="13"/>',
  trending:'<path d="M6 28l9-9 6 6 12-13"/><path d="M25 12h8v8"/>',
  hands:'<path d="M8 26c3-6 6-8 12-8s9 2 12 8"/><path d="M20 10v8"/>',
  clipboard:'<rect x="10" y="8" width="20" height="26" rx="3"/><rect x="15" y="5" width="10" height="5" rx="1"/><path d="M14 20l4 4 8-9"/>',
  chat:'<path d="M8 10h24v16H16l-6 6v-6H8z"/><circle cx="20" cy="18" r="3"/>',
  percent:'<circle cx="13" cy="13" r="4"/><circle cx="27" cy="27" r="4"/><path d="M28 10L10 30"/>',
  star:'<path d="M20 5l3.5 8 8.5 1-6.5 6 1.5 8.5-7-4.5-7 4.5 1.5-8.5-6.5-6 8.5-1z"/>',
  head:'<path d="M14 30v-4c-4-2-6-6-6-10a12 12 0 0 1 24 0c0 4-2 7-4 9v5z"/><path d="M14 30h12"/>',
  door:'<rect x="12" y="6" width="16" height="28" rx="1"/><circle cx="23" cy="20" r="1.4" fill="var(--primary)" stroke="none"/>',
  link:'<rect x="5" y="14" width="14" height="12" rx="6"/><rect x="21" y="14" width="14" height="12" rx="6"/><path d="M18 20h4"/>',
  tree:'<path d="M20 34V22"/><circle cx="20" cy="14" r="10"/>'
};
const WORDS_BASE = [
  {en:"time", pos:"noun", he:"זמן", icon:"time", exEn:"We don't have much time left.", exHe:"לא נשאר לנו הרבה זמן.", assoc:"טיימר במטבח - כשהזמן (time) נגמר, הוא מצפצף."},
  {en:"person", pos:"noun", he:"אדם / בן אדם", icon:"person", exEn:"She's the right person for the job.", exHe:"היא האדם הנכון לתפקיד.", assoc:"\"פרסונה\" בעברית = האישיות של אדם (person)."},
  {en:"year", pos:"noun", he:"שנה", icon:"calendar", exEn:"He moved here last year.", exHe:"הוא עבר לגור כאן בשנה שעברה.", assoc:"נשמע כמו הגרמנית Jahr = שנה. שפות קרובות, צליל דומה."},
  {en:"work", pos:"verb / noun", he:"לעבוד / עבודה", icon:"briefcase", exEn:"I have too much work today.", exHe:"יש לי יותר מדי עבודה היום.", assoc:"\"וורקאאוט\" (workout) - גם זו עבודה, עבודה על הגוף."},
  {en:"life", pos:"noun", he:"חיים", icon:"heart", exEn:"She loves her life in the city.", exHe:"היא אוהבת את החיים שלה בעיר.", assoc:"\"לייף-גארד\" (lifeguard) - שומר על החיים (life) בים."},
  {en:"world", pos:"noun", he:"עולם", icon:"globe", exEn:"He wants to travel the world.", exHe:"הוא רוצה לטייל בעולם.", assoc:"\"וורלד קאפ\" - גביע העולם (world), כל העולם צופה."},
  {en:"family", pos:"noun", he:"משפחה", icon:"users", exEn:"My family lives near the coast.", exHe:"המשפחה שלי גרה ליד החוף.", assoc:"\"פמיליארי\" (familiar) - מוכר לך, כמו בן משפחה (family)."},
  {en:"day", pos:"noun", he:"יום", icon:"sun", exEn:"It rained all day.", exHe:"ירד גשם כל היום.", assoc:"\"דיי-קמפ\" (day camp) - מחנה יום (day) שלם."},
  {en:"believe", pos:"verb", he:"להאמין", icon:"bulb", exEn:"I believe you can do it.", exHe:"אני מאמין שאתה יכול לעשות את זה.", assoc:"believe = be + lie + ve. דמיין שחייבים להאמין (believe) גם לשקר (lie)."},
  {en:"bring", pos:"verb", he:"להביא", icon:"box", exEn:"Can you bring your laptop tomorrow?", exHe:"תוכל להביא את המחשב הנייד שלך מחר?", assoc:"נשמע כמו \"bell ring\" - כשמביאים (bring) חבילה, מצלצלים בפעמון."},
  {en:"happen", pos:"verb", he:"לקרות", icon:"burst", exEn:"Nobody knows what will happen next.", exHe:"אף אחד לא יודע מה יקרה אחר כך.", assoc:"מכיל את \"happy\" - דברים קורים (happen), טובים ורעים."},
  {en:"write", pos:"verb", he:"לכתוב", icon:"pen", exEn:"She writes a letter every week.", exHe:"היא כותבת מכתב כל שבוע.", assoc:"נשמע כמו \"right\" (ימין) - פעם כתבו (write) רק ביד ימין."},
  {en:"provide", pos:"verb", he:"לספק", icon:"gift", exEn:"The hotel provides free breakfast.", exHe:"המלון מספק ארוחת בוקר חינם.", assoc:"\"פרו\" (מקצועי) - ספק מקצועי מספק (provide) שירות."},
  {en:"decide", pos:"verb", he:"להחליט", icon:"fork", exEn:"We need to decide by Friday.", exHe:"אנחנו צריכים להחליט עד יום שישי.", assoc:"מכיל \"cide\" כמו ב-suicide - להחליט (decide) זה \"לחתוך\" באפשרויות."},
  {en:"reach", pos:"verb", he:"להגיע / להשיג", icon:"arrowup", exEn:"They finally reached the summit.", exHe:"הם סוף סוף הגיעו לפסגה.", assoc:"נשמע כמו \"ריצה\" - רצים כדי להגיע (reach) למשהו."},
  {en:"remain", pos:"verb", he:"להישאר", icon:"anchor", exEn:"Please remain seated during the flight.", exHe:"נא להישאר במושב במהלך הטיסה.", assoc:"מכיל \"main\" (עיקרי) - מה שנשאר (remain) הוא העיקר."},
  {en:"level", pos:"noun", he:"רמה", icon:"bars", exEn:"His English is at a good level.", exHe:"האנגלית שלו ברמה טובה.", assoc:"כמו \"לבלר\" בעברית - מודד רמה (level) ישרה בבנייה."},
  {en:"reason", pos:"noun", he:"סיבה", icon:"question", exEn:"There's a good reason for this.", exHe:"יש סיבה טובה לזה.", assoc:"נשמע כמו \"reasonable\" (הגיוני) - לכל דבר הגיוני יש סיבה (reason)."},
  {en:"chance", pos:"noun", he:"סיכוי / הזדמנות", icon:"dice", exEn:"This is your chance to shine.", exHe:"זו ההזדמנות שלך להצטיין.", assoc:"נשמע כמו \"דאנס\" (dance) - קח סיכוי (chance) ותרקוד."},
  {en:"result", pos:"noun", he:"תוצאה", icon:"target", exEn:"The result was better than expected.", exHe:"התוצאה הייתה טובה מהצפוי.", assoc:"מכיל \"sult\" כמו ב-consult - מתייעצים לפני שמקבלים תוצאה (result)."},
  {en:"section", pos:"noun", he:"קטע / חלק", icon:"grid", exEn:"Read the next section carefully.", exHe:"קרא/י את הקטע הבא בעיון.", assoc:"כמו חתיכה (section) מעוגה - חלק מתוך השלם."},
  {en:"quality", pos:"noun", he:"איכות", icon:"badge", exEn:"The quality of the food was excellent.", exHe:"איכות האוכל הייתה מעולה.", assoc:"מילה שאולה - \"קוואליטי\" כבר מוכרת לך בעברית."},
  {en:"community", pos:"noun", he:"קהילה", icon:"community", exEn:"They built a strong community here.", exHe:"הם בנו קהילה חזקה כאן.", assoc:"מכיל \"common\" (משותף) - קהילה (community) = דברים משותפים."},
  {en:"government", pos:"noun", he:"ממשלה", icon:"building", exEn:"The government announced new rules.", exHe:"הממשלה הכריזה על כללים חדשים.", assoc:"מכיל \"govern\" (לשלוט/לנהל) - הממשלה (government) מנהלת את המדינה."},
  {en:"available", pos:"adj", he:"זמין", icon:"check", exEn:"The manager is not available now.", exHe:"המנהל לא זמין כרגע.", assoc:"מכיל \"able\" (מסוגל) - אם אתה זמין (available) אתה מסוגל לעזור."},
  {en:"certain", pos:"adj", he:"בטוח / מסוים", icon:"shield", exEn:"I'm certain she will call back.", exHe:"אני בטוח שהיא תחזור לצלצל.", assoc:"מכיל \"ten\" (10) - בטוח (certain) ב-10 מתוך 10."},
  {en:"difficult", pos:"adj", he:"קשה", icon:"mountain", exEn:"This exam was really difficult.", exHe:"המבחן הזה היה ממש קשה.", assoc:"המילה עצמה ארוכה וקשה לביטוי - בדיוק כמו המשמעות שלה (difficult)."},
  {en:"similar", pos:"adj", he:"דומה", icon:"overlap", exEn:"Their houses look similar.", exHe:"הבתים שלהם נראים דומים.", assoc:"קרוב בכתיב ל-\"smile\" - חיוכים דומים (similar)."},
  {en:"international", pos:"adj", he:"בינלאומי", icon:"intlglobe", exEn:"She works for an international company.", exHe:"היא עובדת בחברה בינלאומית.", assoc:"מכיל \"nation\" (אומה) - בין (inter) אומות (international)."},
  {en:"whole", pos:"adj", he:"שלם / כל", icon:"circle", exEn:"He ate the whole cake.", exHe:"הוא אכל את כל העוגה.", assoc:"נשמע בדיוק כמו \"hole\" (חור) - אבל ההפך: שלם (whole), בלי חור."},
  {en:"increase", pos:"verb / noun", he:"לעלות / עלייה", icon:"trending", exEn:"Prices increased last month.", exHe:"המחירים עלו בחודש שעבר.", assoc:"מכיל \"crease\" (קפל) - כשמקפלים דף שוב ושוב, הערימה עולה (increase)."},
  {en:"support", pos:"verb / noun", he:"לתמוך / תמיכה", icon:"hands", exEn:"Thank you for your support.", exHe:"תודה על התמיכה שלך.", assoc:"מכיל \"port\" (נמל) - נמל תומך (support) בספינות שעוגנות בו."},
  {en:"require", pos:"verb", he:"לדרוש", icon:"clipboard", exEn:"The job requires experience.", exHe:"התפקיד דורש ניסיון.", assoc:"מכיל \"wire\" (חוט) - לפעמים דורשים (require) כבל כדי לחבר משהו."},
  {en:"suggest", pos:"verb", he:"להציע", icon:"chat", exEn:"I suggest we leave early.", exHe:"אני מציע שנצא מוקדם.", assoc:"מכיל \"guest\" (אורח) - מציעים (suggest) לאורח דברים."},
  {en:"probably", pos:"adverb", he:"כנראה", icon:"percent", exEn:"It will probably rain tomorrow.", exHe:"כנראה שירד גשם מחר.", assoc:"מכיל \"probe\" (בדיקה) - בודקים כדי לדעת מה כנראה (probably) יקרה."},
  {en:"especially", pos:"adverb", he:"בייחוד", icon:"star", exEn:"I love fruit, especially mangoes.", exHe:"אני אוהב פירות, בייחוד מנגו.", assoc:"מכיל \"special\" (מיוחד) - בייחוד (especially) = במיוחד."},
  {en:"consider", pos:"verb", he:"לשקול", icon:"head", exEn:"Please consider my offer.", exHe:"אנא שקול/י את ההצעה שלי.", assoc:"מכיל \"side\" (צד) - לשקול (consider) = לבחון את שני הצדדים."},
  {en:"opportunity", pos:"noun", he:"הזדמנות", icon:"door", exEn:"This job is a great opportunity.", exHe:"התפקיד הזה הוא הזדמנות מצוינת.", assoc:"מכיל \"port\" (נמל) - הזדמנות (opportunity) כמו ספינה שנכנסת לנמל, תפוס אותה לפני שתפליג."},
  {en:"relationship", pos:"noun", he:"מערכת יחסים", icon:"link", exEn:"They have a strong relationship.", exHe:"יש להם מערכת יחסים חזקה.", assoc:"מכיל \"ship\" (ספינה) - קשר (relationship) הוא כמו ספינה שמנווטים יחד."},
  {en:"environment", pos:"noun", he:"סביבה", icon:"tree", exEn:"We must protect the environment.", exHe:"עלינו להגן על הסביבה.", assoc:"מכיל \"environ\" (מסביב, בצרפתית) - כל מה שמסביבך (environment)."}
];

import { WORDS_BATCH2, NEW_ICONS } from './vocab-words-batch2.js';
import { WORDS_BATCH3, NEW_ICONS_B3 } from './vocab-words-batch3.js';
import { WORDS_BATCH4, NEW_ICONS_B4 } from './vocab-words-batch4.js';
import { WORDS_BATCH5, NEW_ICONS_B5 } from './vocab-words-batch5.js';

const ALL_ICONS = { ...ICONS_BASE, ...NEW_ICONS, ...NEW_ICONS_B3, ...NEW_ICONS_B4, ...NEW_ICONS_B5 };

const ALL_WORDS = [
  ...WORDS_BASE.map(w => ({ ...w, level: 1 })),
  ...WORDS_BATCH2.map(w => ({ ...w, level: 1 })),
  ...WORDS_BATCH3.map(w => ({ ...w, level: 1 })),
  ...WORDS_BATCH4.map(w => ({ ...w, level: 1 })),
  ...WORDS_BATCH5.map(w => ({ ...w, level: 1 }))
];

// Stable id per word - used as the Firestore progress doc id.
ALL_WORDS.forEach(w => { w.id = w.en.toLowerCase().replace(/[^a-z]/g, ''); });

function iconSvg(key){
  return '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' + (ALL_ICONS[key] || '') + '</svg>';
}

export { ALL_WORDS, ALL_ICONS, iconSvg };
