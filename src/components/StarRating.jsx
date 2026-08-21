import './StarRating.css'

// Renders a fractional rating (e.g. 4.7 of 5) by clipping a gold layer
// over a muted track — both layers use identical glyphs so they align exactly.
export default function StarRating({ value = 5, outOf = 5, label }) {
  const glyphs = '★'.repeat(outOf)
  const pct = `${Math.min(Math.max(value / outOf, 0), 1) * 100}%`

  return (
    <p className="rating">
      <span className="rating__stars" role="img" aria-label={`${value} out of ${outOf} stars`}>
        <span className="rating__track" aria-hidden="true">
          {glyphs}
        </span>
        <span className="rating__fill" style={{ width: pct }} aria-hidden="true">
          {glyphs}
        </span>
      </span>
      <span className="rating__text">{label}</span>
    </p>
  )
}
