// Batch 5: 20 more level-1 words (everyday core verbs/nouns).

const NEW_ICONS_B5 = {
  case:'<rect x="10" y="16" width="20" height="15" rx="2"/><path d="M15 16v-3a5 5 0 0 1 10 0v3"/>',
  point:'<circle cx="20" cy="20" r="3" fill="var(--primary)" stroke="none"/><path d="M20 6v8M20 26v8M6 20h8M26 20h8"/>',
  fact:'<circle cx="20" cy="20" r="13"/><path d="M14 20l4 4 8-8"/>',
  part:'<rect x="8" y="8" width="24" height="24" rx="3"/><path d="M20 8v24M8 20h24"/>',
  pin:'<path d="M20 5c7 0 12 5 12 12 0 9-12 18-12 18S8 26 8 17c0-7 5-12 12-12z"/><circle cx="20" cy="17" r="4"/>',
  thing:'<circle cx="20" cy="20" r="14"/><path d="M16 15a4 4 0 1 1 6 3c-1 1-2 2-2 4"/><circle cx="20" cy="27" r="0.8" fill="var(--primary)" stroke="none"/>',
  road:'<path d="M14 34l4-28h4l4 28"/><path d="M20 12v3M20 19v3M20 26v3"/>',
  hand:'<path d="M14 22V10a2.5 2.5 0 0 1 5 0v8M19 18V8a2.5 2.5 0 0 1 5 0v10M24 19V11a2.5 2.5 0 0 1 5 0v11c0 7-4 12-10 12s-9-3-11-7l-3-6c-1-2 1-4 3-3l3 3"/>',
  heart:'<path d="M20 32s-11-6.5-11-15a7 7 0 0 1 11-5.5A7 7 0 0 1 31 17c0 8.5-11 15-11 15z"/>',
  star:'<path d="M20 5l3.5 8 8.5 1-6.5 6 1.5 8.5-7-4.5-7 4.5 1.5-8.5-6.5-6 8.5-1z"/>',
  target:'<circle cx="20" cy="20" r="13"/><circle cx="20" cy="20" r="7"/><circle cx="20" cy="20" r="1.6" fill="var(--primary)" stroke="none"/>',
  play:'<path d="M12 8l20 12-20 12z"/>',
  stop:'<path d="M13 5h14l8 8v14l-8 8H13l-8-8V13z"/><path d="M14 14l12 12M26 14l-12 12"/>',
  trending:'<path d="M6 28l9-9 6 6 12-13"/><path d="M25 12h8v8"/>',
  turn:'<path d="M8 20a12 12 0 1 1 4 9"/><path d="M6 24l2 6 6-2"/>',
  door:'<rect x="12" y="6" width="16" height="28" rx="1"/><circle cx="23" cy="20" r="1.4" fill="var(--primary)" stroke="none"/>',
  lock:'<rect x="9" y="18" width="22" height="16" rx="3"/><path d="M14 18v-4a6 6 0 0 1 12 0v4"/><circle cx="20" cy="25" r="2"/>'
};

const WORDS_BATCH5 = [
  {en:"case", pos:"noun", he:"מקרה / תיק", icon:"case", exEn:"In that case, let's wait.", exHe:"במקרה כזה, בואו נחכה.", assoc:"נשמע כמו \"קייס\" - כבר מוכר מ\"קייס לטלפון\" (מקרה/תיק)."},
  {en:"point", pos:"noun / verb", he:"נקודה / להצביע", icon:"point", exEn:"That's a good point.", exHe:"זו נקודה טובה.", assoc:"מכיל \"pin\" (סיכה) - נקודה (point) מסמנת מקום מדויק, כמו סיכה על מפה."},
  {en:"fact", pos:"noun", he:"עובדה", icon:"fact", exEn:"It's a fact, not an opinion.", exHe:"זו עובדה, לא דעה.", assoc:"מכיל \"act\" (לפעול) - עובדה (fact) היא משהו שבאמת קרה בפועל."},
  {en:"part", pos:"noun", he:"חלק", icon:"part", exEn:"This is part of the plan.", exHe:"זה חלק מהתוכנית.", assoc:"מילה קצרה וזהה כמעט - \"פארט\" נשמע כמו חלק (part) בעברית מדוברת."},
  {en:"place", pos:"noun", he:"מקום", icon:"pin", exEn:"This is a nice place to live.", exHe:"זה מקום נחמד לגור בו.", assoc:"נשמע כמו \"פלייס\" - כבר מוכר מ\"פלייסמנט\", place = מקום."},
  {en:"thing", pos:"noun", he:"דבר", icon:"thing", exEn:"There's one more thing to check.", exHe:"יש עוד דבר אחד לבדוק.", assoc:"מכיל \"thin\" (דק) בכתיב - \"דבר\" (thing) יכול להיות כל דבר, גדול או קטן."},
  {en:"way", pos:"noun", he:"דרך / אופן", icon:"road", exEn:"This is the best way to do it.", exHe:"זו הדרך הכי טובה לעשות את זה.", assoc:"נשמע כמו \"weigh\" (לשקול) - הדרך (way) הנכונה שוקלת את האפשרויות."},
  {en:"use", pos:"verb / noun", he:"להשתמש / שימוש", icon:"hand", exEn:"You can use my computer.", exHe:"אתה יכול להשתמש במחשב שלי.", assoc:"נשמע כמו \"יוז\" - כבר מוכר מ\"יוזר\" (user), use = להשתמש."},
  {en:"need", pos:"verb / noun", he:"להזדקק / צורך", icon:"heart", exEn:"I need more time.", exHe:"אני צריך יותר זמן.", assoc:"מכיל \"needle\" (מחט) חלקית - כשצריך (need) משהו דחוף, זה כמו דקירת מחט."},
  {en:"want", pos:"verb", he:"לרצות", icon:"star", exEn:"What do you want for dinner?", exHe:"מה אתה רוצה לארוחת ערב?", assoc:"מכיל \"wan\" (חיוור) - כשרוצים (want) משהו חזק, מחווירים מציפייה."},
  {en:"try", pos:"verb", he:"לנסות", icon:"target", exEn:"Please try again.", exHe:"נסה/י שוב, בבקשה.", assoc:"נשמע כמו \"טְרַיי\" - כבר מוכר מ\"טריי אאוט\" (try out), לנסות."},
  {en:"start", pos:"verb / noun", he:"להתחיל / התחלה", icon:"play", exEn:"The movie starts at eight.", exHe:"הסרט מתחיל בשמונה.", assoc:"מכיל \"star\" (כוכב) - כל התחלה (start) גדולה מתחילה כמו כוכב עולה."},
  {en:"stop", pos:"verb / noun", he:"לעצור", icon:"stop", exEn:"Please stop here.", exHe:"עצור/י כאן, בבקשה.", assoc:"מכיל \"top\" - תמרור STOP עוצר (stop) תנועה בראש הצומת."},
  {en:"move", pos:"verb", he:"לזוז / לעבור", icon:"trending", exEn:"They moved to a new city.", exHe:"הם עברו לעיר חדשה.", assoc:"נשמע כמו \"מוּב\" - כבר מוכר מ\"מובייל\" (mobile), move = לזוז."},
  {en:"turn", pos:"verb / noun", he:"לפנות / תור", icon:"turn", exEn:"Turn left at the light.", exHe:"פנה/י שמאלה ברמזור.", assoc:"מכיל \"urn\" (כד) - לפנות (turn) כמו כד שמסתובב על מסגרת."},
  {en:"play", pos:"verb / noun", he:"לשחק", icon:"play", exEn:"The kids play outside all day.", exHe:"הילדים משחקים בחוץ כל היום.", assoc:"מילה כמעט זהה - \"פְּלֵיי\" נשמע כמו \"פלייליסט\" (playlist), לשחק."},
  {en:"open", pos:"verb / adj", he:"לפתוח / פתוח", icon:"door", exEn:"The store opens at nine.", exHe:"החנות נפתחת בתשע.", assoc:"מכיל \"pen\" (עט) - פותחים (open) עט כדי לכתוב."},
  {en:"close", pos:"verb / adj", he:"לסגור / קרוב", icon:"lock", exEn:"Please close the door behind you.", exHe:"נא לסגור את הדלת מאחוריך.", assoc:"נשמע כמו \"קלוז\" - כבר מוכר מ\"קלוז אפ\" (close-up), קרוב/סגור."},
  {en:"free", pos:"adj", he:"חופשי / חינם", icon:"star", exEn:"Entry to the museum is free today.", exHe:"הכניסה למוזיאון חינם היום.", assoc:"נשמע כמו \"פְרִי\" - כבר מוכר מ\"פְרִי וויי-פיי\" (free wifi), חופשי/חינם."},
  {en:"real", pos:"adj", he:"אמיתי", icon:"fact", exEn:"Is this a real diamond?", exHe:"זה יהלום אמיתי?", assoc:"נשמע כמו \"ריל\" - כבר מוכר מ\"ריאליטי\" (reality), אמיתי (real)."}
];

export { WORDS_BATCH5, NEW_ICONS_B5 };
