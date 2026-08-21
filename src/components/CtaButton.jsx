import './CtaButton.css'

export default function CtaButton({ href = '#', children, size = 'lg' }) {
  return (
    <a className={`cta cta--${size}`} href={href}>
      <span className="cta__label">{children}</span>
      <span className="cta__arrow" aria-hidden="true">
        →
      </span>
    </a>
  )
}
