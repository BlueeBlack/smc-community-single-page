# SMC India — Smart Money Concepts landing page

Single-page React landing page. Visual language of the GETNOS audit page
(cream canvas, condensed black display type, lime CTA with a hard shadow,
dashed fun-fact box), with Smart Money Concepts content.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle -> dist/
npm run preview  # serve the built bundle
```

## Structure

```
index.html                 fonts + root mount
src/
  main.jsx                 React entry
  App.jsx                  page composition
  data/content.js          all copy lives here — edit this, not the components
  hooks/useTheme.js        light/dark toggle, persisted to localStorage
  styles/global.css        design tokens (color, type, spacing) + resets
  components/
    Header.jsx             logo mark, wordmark, tagline
    Hero.jsx               emoji, headline, subhead, CTA, proof, strip, fun fact
    CtaButton.jsx          lime button with offset shadow (sizes: lg | sm)
    StarRating.jsx         ★★★★★ + social proof line
    MicroStrip.jsx         uppercase monospace strip
    FunFact.jsx            dashed callout box
    InsideSection.jsx      "Inside" bullet list + second CTA
    Disclaimer.jsx         SEBI / risk footer
    ThemeToggle.jsx        floating light/dark switch
```

Each component ships its own CSS file next to it. Colors, fonts and spacing
come from CSS custom properties in `src/styles/global.css` — change the
`--lime`, `--bg` and `--ink` tokens to rebrand the whole page.

## Wiring up the CTAs

Both buttons point at `#join`. Swap `cta.href` in `src/data/content.js`
for the real Telegram / Instagram invite links.
