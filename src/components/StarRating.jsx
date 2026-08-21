import './StarRating.css'

export default function StarRating({ stars = 5, highlight, text }) {
  return (
    <p className="rating">
      <span className="rating__stars" aria-hidden="true">
        {'★'.repeat(stars)}
      </span>
      <span className="rating__text">
        <strong>{highlight}</strong> {text}
      </span>
    </p>
  )
}
