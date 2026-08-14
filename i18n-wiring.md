# Ladder — wiring the language switch

`p0i18n.js` replaces the earlier i18n core. It keeps `T()` and `applyLang()`
compatible, and adds parameters + a missing-key tracker.

---

## 1. Build order

`p0i18n.js` must load **before** any file that calls `T()`, but it references
`me()` and `esc()` only at call time, so its position relative to the engine
doesn't matter. Put it first.

---

## 2. Language selector — in `vFamily`, the "מראה" card

Replace the appearance card with this (adds one field, keeps the other two):

```js
<div class="card">
  <div class="field"><label>${T('שפת הממשק')}</label><div class="seg" id="lg">
    <button data-v="he" class="${(u.settings.lang||'he')==='he'?'on':''}">עברית</button>
    <button data-v="en" class="${u.settings.lang==='en'?'on':''}">English</button></div></div>
  <div class="field"><label>${T('ערכת נושא')}</label><div class="seg" id="th">
    ${[['auto',T('לפי המכשיר')],['light',T('בהיר')],['dark',T('כהה')]]
      .map(([v,n])=>`<button data-v="${v}" class="${(u.settings.theme||'auto')===v?'on':''}">${n}</button>`).join('')}</div></div>
  <div class="field" style="margin-bottom:0"><label>${T('גודל טקסט')}</label><div class="seg" id="sz">
    ${[['m',T('רגיל')],['l',T('גדול')],['xl',T('ענק')]]
      .map(([v,n])=>`<button data-v="${v}" class="${(u.settings.size||'m')===v?'on':''}">${n}</button>`).join('')}</div></div>
</div>
```

And extend the existing segment handler at the bottom of `vFamily`:

```js
['th','sz','lg'].forEach(id=>{
  const key = {th:'theme', sz:'size', lg:'lang'}[id];
  document.querySelectorAll('#'+id+' button').forEach(b=>b.onclick=()=>{
    document.querySelectorAll('#'+id+' button').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');
    u.settings[key]=b.dataset.v;
    saveUsers();
    if(key==='lang'){ applyLang(); render(); }   // כיוון הדף משתנה — צריך ציור מחדש
    else applyTheme();
  });
});
```

The language buttons stay untranslated on purpose — a picker you can read in
the language you're switching *from* is the one that works.

---

## 3. Call `applyLang()` on every render

In `render()`, first line:

```js
function render(){
  applyLang();
  applyTheme();
  ...
```

Also add it next to the existing `applyTheme()` call at boot (just above
`render()` at the bottom of the file), so the welcome screen and the lock
screen — which run before there's an active user — pick up the device-level
language from `localStorage`.

Same in `addUser()`: after `u.settings.size=size;` add
`u.settings.lang = UI_LANG;` so a new profile inherits the current language
instead of resetting to Hebrew.

---

## 4. CSS — add at the end of the `<style>` block

```css
/* ---------- ממשק באנגלית ---------- */
html[lang="en"] body{font-family:var(--en)}
html[lang="en"] .readout .tag,
html[lang="en"] .keypad button.act,
html[lang="en"] .slot:empty::after{font-family:var(--en)}
html[lang="en"] .slot:empty::after{content:'Arrange the words here';direction:ltr}
/* תוכן עברי בתוך ממשק אנגלי — תרגומי מילים, משפטי דוגמה */
.hetext{direction:rtl;unicode-bidi:isolate;font-family:var(--he)}
html[lang="en"] .prompt .big.he,
html[lang="en"] .prompt .med.he{font-family:var(--he);direction:rtl}
```

Everything else already uses logical properties (`inset-inline-start`,
`padding-inline`), so the flip to LTR needs no duplicate rules.

---

## 5. Interpolated sentences

The dictionary keys are whole Hebrew strings, so a sentence built from
`${x} פריטים` never matches a key — it would fall back to Hebrew word order
even in English. Fifteen call sites need to become patterns. The pattern keys
are already in the dictionary; the change is at the call site:

```js
// לפני
`${a.dueNow} פריטים ממתינים לחזרה`
// אחרי
T('{0} פריטים ממתינים לחזרה', a.dueNow)

// לפני
`${dn} מתוך ${u.ctrl.daily} פריטים${u.ctrl.cap?` · מגבלה: ${u.ctrl.cap}`:''}`
// אחרי
T('{0} מתוך {1} פריטים', dn, u.ctrl.daily) + (u.ctrl.cap ? ' · '+T('מגבלה: {0}', u.ctrl.cap) : '')

// לפני
toast(`נפתח ב־${LEVELS[u.lv].need}% ברמה ${u.lv}`)
// אחרי
toast(T('נפתח ב־{0}% ברמה {1}', LEVELS[u.lv].need, u.lv))
```

Full list of pattern keys is at the bottom of `p0i18n.js` under
`תבניות` — each one maps to exactly one call site.

---

## 6. Finding what's left

Switch to English, use the app, then in the console:

```js
T.missing()
```

It returns every Hebrew string that passed through `T()` in English mode and
wasn't found — which catches both keys I mistyped and call sites the wrapper
missed. Anything that appears in Hebrew on screen but *doesn't* show up in
`T.missing()` is a string that was never wrapped in `T()` at all.

---

## 7. Deliberately not translated

Learning content stays Hebrew, because it *is* the thing being learned:
`WORDS.he`, sentence translations, `GRAMMAR`, `CLOZE`/`PROOF` explanations,
`MINPAIRS` tips, `SPOKEN` notes, `IRR_GROUPS`, `CORE_TENSES` use/form/trap,
`TALK` hints, `MNEMONIC`, `LETTER_SHAPE`.

Wrap those in `heSpan()` where they sit inside an English LTR line, so the
punctuation doesn't jump to the wrong side.

Open question worth deciding before you go further: an English UI with Hebrew
glosses only makes sense for a Hebrew-speaking family whose parent prefers
English chrome. If the goal is a learner with no Hebrew at all, the content
layer needs an `en` gloss field too — that's a much larger job than this
dictionary and I'd keep it separate.
