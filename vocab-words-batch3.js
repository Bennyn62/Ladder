// Batch 3: words 81-104, level 1 (rounds level 1 out toward 80 total words so far).

const NEW_ICONS_B3 = {
  friend:'<circle cx="13" cy="14" r="5"/><circle cx="27" cy="14" r="5"/><path d="M5 32c0-6 4-9 8-9M35 32c0-6-4-9-8-9M13 32c0-5 3-8 7-8s7 3 7 8"/>',
  room:'<rect x="8" y="8" width="24" height="24" rx="2"/><path d="M8 20h24"/>',
  color:'<circle cx="14" cy="14" r="6"/><circle cx="26" cy="14" r="6"/><circle cx="20" cy="24" r="6"/>',
  number:'<path d="M12 8v24M28 8v24M6 15h28M6 25h28"/>',
  car:'<path d="M6 24l3-9a3 3 0 0 1 3-2h16a3 3 0 0 1 3 2l3 9"/><rect x="4" y="24" width="32" height="8" rx="2"/><circle cx="12" cy="32" r="3"/><circle cx="28" cy="32" r="3"/>',
  door:'<rect x="12" y="6" width="16" height="28" rx="1"/><circle cx="23" cy="20" r="1.4" fill="var(--primary)" stroke="none"/>',
  paper:'<rect x="10" y="6" width="20" height="28" rx="2"/><path d="M14 14h12M14 20h12M14 26h8"/>',
  window:'<rect x="8" y="8" width="24" height="24" rx="2"/><path d="M20 8v24M8 20h24"/>',
  clothes:'<path d="M14 8l6 4 6-4 4 6-4 3v17H14V17l-4-3z"/>',
  key:'<circle cx="14" cy="14" r="6"/><path d="M18 18l14 14M28 24l4-4M32 28l4-4"/>',
  clock:'<circle cx="20" cy="20" r="14"/><path d="M20 12v8l6 4"/>',
  bag:'<rect x="8" y="14" width="24" height="20" rx="3"/><path d="M14 14v-3a6 6 0 0 1 12 0v3"/>',
  garden:'<circle cx="14" cy="26" r="5"/><circle cx="26" cy="26" r="5"/><circle cx="20" cy="18" r="5"/><path d="M20 23v11"/>',
  letter:'<rect x="6" y="10" width="28" height="20" rx="2"/><path d="M6 12l14 10 14-10"/>',
  price:'<path d="M8 20l12-12h10v10L18 30a2 2 0 0 1-3 0l-7-7a2 2 0 0 1 0-3z"/><circle cx="24" cy="16" r="2"/>',
  team:'<circle cx="12" cy="14" r="4"/><circle cx="20" cy="10" r="4"/><circle cx="28" cy="14" r="4"/><path d="M6 32c0-5 3-8 6-8M34 32c0-5-3-8-6-8M14 32c0-5 3-9 6-9s6 4 6 9"/>',
  news:'<rect x="7" y="9" width="26" height="22" rx="2"/><path d="M12 15h16M12 20h16M12 25h10"/>',
  power:'<path d="M20 6v14"/><path d="M13 12a11 11 0 1 0 14 0"/>',
  space:'<circle cx="20" cy="20" r="6"/><circle cx="20" cy="20" r="14" stroke-dasharray="3 4"/>',
  page:'<rect x="10" y="6" width="20" height="28" rx="2"/><path d="M15 26l3-3 3 2 4-6"/>',
  plan:'<rect x="8" y="8" width="24" height="24" rx="2"/><path d="M14 16h12M14 22h8"/>',
  system:'<circle cx="20" cy="12" r="4"/><circle cx="10" cy="28" r="4"/><circle cx="30" cy="28" r="4"/><path d="M20 16v6M17 24l-4 2M23 24l4 2"/>',
  process:'<path d="M8 20a12 12 0 0 1 20-9M32 20a12 12 0 0 1-20 9"/><path d="M28 8v4h-4M12 32v-4h4"/>'
};

const WORDS_BATCH3 = [
  {en:"friend", pos:"noun", he:"חבר / חברה", icon:"friend", exEn:"He is my best friend.", exHe:"הוא החבר הכי טוב שלי.", assoc:"מכיל \"end\" (סוף) - חבר טוב (friend) נשאר איתך עד הסוף."},
  {en:"room", pos:"noun", he:"חדר", icon:"room", exEn:"Clean your room, please.", exHe:"נקה את החדר שלך, בבקשה.", assoc:"נשמע כמו \"רוּם\" - יש \"place\" (מקום) בחדר (room)."},
  {en:"color", pos:"noun", he:"צבע", icon:"color", exEn:"What's your favorite color?", exHe:"מה הצבע האהוב עליך?", assoc:"מילה כמעט מוכרת - \"קולור\" נשמע כמו \"קולורי\" (צבעוני)."},
  {en:"number", pos:"noun", he:"מספר", icon:"number", exEn:"Choose a number from one to ten.", exHe:"בחר/י מספר מ-1 עד 10.", assoc:"מכיל \"numb\" (קהה) - ספירת מספרים (number) חוזרת ומקהה."},
  {en:"car", pos:"noun", he:"מכונית", icon:"car", exEn:"We drove there by car.", exHe:"נסענו לשם במכונית.", assoc:"מילה קצרה וזהה כמעט - \"קאר\" נשמע כמו \"קאר\" רדיו במכונית (car)."},
  {en:"door", pos:"noun", he:"דלת", icon:"door", exEn:"Please close the door.", exHe:"נא לסגור את הדלת.", assoc:"נשמע כמו \"דוֹר\" - דמיין דלת (door) שנפתחת לדור חדש."},
  {en:"paper", pos:"noun", he:"נייר", icon:"paper", exEn:"Write it on a piece of paper.", exHe:"כתוב/י את זה על פיסת נייר.", assoc:"מכיל \"pape\" - כמו עיתון (newspaper) עשוי מנייר (paper)."},
  {en:"window", pos:"noun", he:"חלון", icon:"window", exEn:"Open the window, it's hot.", exHe:"פתח/י את החלון, חם.", assoc:"מכיל \"wind\" (רוח) - חלון (window) פתוח מכניס רוח."},
  {en:"clothes", pos:"noun", he:"בגדים", icon:"clothes", exEn:"Pack warm clothes for the trip.", exHe:"ארוז/י בגדים חמים לטיול.", assoc:"מכיל \"cloth\" (בד) - בגדים (clothes) עשויים מבד."},
  {en:"key", pos:"noun", he:"מפתח", icon:"key", exEn:"I lost my house key.", exHe:"איבדתי את מפתח הבית שלי.", assoc:"נשמע כמו \"קי\" - כמו מקש (key) במקלדת, פותח דלתות."},
  {en:"clock", pos:"noun", he:"שעון", icon:"clock", exEn:"The clock on the wall is broken.", exHe:"השעון על הקיר מקולקל.", assoc:"מכיל \"lock\" (מנעול) - שעון (clock) נועל את הזמן שלנו."},
  {en:"bag", pos:"noun", he:"תיק", icon:"bag", exEn:"She carries a big bag to work.", exHe:"היא נושאת תיק גדול לעבודה.", assoc:"מילה קצרה ומוכרת - \"בג\" נשמע כמו \"bag\" באנגלית בעברית מדוברת."},
  {en:"garden", pos:"noun", he:"גינה", icon:"garden", exEn:"They grow vegetables in the garden.", exHe:"הם מגדלים ירקות בגינה.", assoc:"מכיל \"guard\" (שומר) - גנן שומר על הגינה (garden)."},
  {en:"letter", pos:"noun", he:"מכתב / אות", icon:"letter", exEn:"She wrote a letter to her grandmother.", exHe:"היא כתבה מכתב לסבתא שלה.", assoc:"מכיל \"let\" (לתת) - מכתב (letter) נותן לך לדעת מה שלום מישהו."},
  {en:"price", pos:"noun", he:"מחיר", icon:"price", exEn:"The price of milk went up.", exHe:"מחיר החלב עלה.", assoc:"נשמע כמו \"פְּרַייס\" - קרוב ל\"prize\" (פרס), משהו ששווה תשלום (price)."},
  {en:"team", pos:"noun", he:"קבוצה", icon:"team", exEn:"Our team won the game.", exHe:"הקבוצה שלנו ניצחה במשחק.", assoc:"מכיל \"tea\" (תה) - חברי קבוצה (team) שותים תה ביחד."},
  {en:"news", pos:"noun", he:"חדשות", icon:"news", exEn:"Did you hear the news today?", exHe:"שמעת את החדשות היום?", assoc:"מכיל \"new\" (חדש) - חדשות (news) זה תמיד משהו חדש."},
  {en:"power", pos:"noun", he:"כוח / חשמל", icon:"power", exEn:"The storm knocked out the power.", exHe:"הסערה ניתקה את החשמל.", assoc:"נשמע כמו \"פאוור\" - כבר מוכר מ\"פאוורלית\" סוללות (power)."},
  {en:"space", pos:"noun", he:"חלל / מקום", icon:"space", exEn:"There's not enough space here.", exHe:"אין מספיק מקום כאן.", assoc:"מכיל \"pace\" (קצב) - צריך קצב נכון כדי למלא מקום (space)."},
  {en:"page", pos:"noun", he:"עמוד", icon:"page", exEn:"Turn to page ten.", exHe:"עברו לעמוד עשר.", assoc:"נשמע כמו \"פֵּייג'\" - כמו עמוד (page) בפייסבוק."},
  {en:"plan", pos:"verb / noun", he:"לתכנן / תוכנית", icon:"plan", exEn:"We plan to visit next month.", exHe:"אנחנו מתכננים לבקר בחודש הבא.", assoc:"נשמע כמו \"פלאן\" - כבר מוכר מ\"פלאן עסקי\" (תוכנית)."},
  {en:"system", pos:"noun", he:"מערכת", icon:"system", exEn:"The new system is easy to use.", exHe:"המערכת החדשה קלה לשימוש.", assoc:"מכיל \"stem\" (גבעול) - מערכת (system) כמו גבעול שמחבר חלקים."},
  {en:"process", pos:"noun / verb", he:"תהליך", icon:"process", exEn:"Learning a language is a slow process.", exHe:"לימוד שפה הוא תהליך איטי.", assoc:"מכיל \"progress\" חלקית - תהליך (process) מוביל להתקדמות."}
];

export { WORDS_BATCH3, NEW_ICONS_B3 };
