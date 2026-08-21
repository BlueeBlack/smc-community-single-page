// Single source of truth for every string on the page.
// Edit here — components stay untouched.

export const brand = {
  name: 'SMC',
  tagline: 'Smart Money Concepts.',
}

export const hero = {
  emoji: '👋',
  headline: ['LEARN SMART', 'MONEY CONCEPTS'],
  // `bold: true` renders the segment in the heavy ink weight, like the reference.
  subhead: [
    { text: 'Understand what institutions actually do on a chart — ' },
    { text: 'liquidity, order blocks, market structure', bold: true },
    { text: '. Taught step by step, in the Indian market context. ' },
    { text: 'Free community, zero noise.', bold: true },
    { text: ' 👇' },
  ],
  cta: { label: 'Join the community', href: '#join' },
  rating: {
    stars: 5,
    highlight: '20,000+',
    text: 'on Instagram · 9,000+ on Telegram',
  },
  strip: 'Covered weekly: Nifty · Bank Nifty · SMC · ICT · Market structure · Liquidity',
  funFact: {
    label: 'Fun fact',
    body:
      'Nearly 30,000 traders follow along across Instagram and Telegram. Post your markup in the group and it gets reviewed.',
  },
}

export const inside = {
  title: 'Inside',
  items: [
    'Daily chart breakdowns on Nifty & Bank Nifty',
    'SMC/ICT concepts explained from scratch',
    'Free PDFs and cheat sheets',
    'Post your markup, get it reviewed',
  ],
  cta: { label: 'Join the community', href: '#join' },
}

export const disclaimer =
  'Educational content only. Not investment advice. Not SEBI-registered. Markets carry risk.'
