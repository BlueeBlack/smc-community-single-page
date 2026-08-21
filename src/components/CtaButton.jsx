import './CtaButton.css'

export default function CtaButton({ href = '#', children, size = 'lg' }) {
  const external = /^https?:/i.test(href)

  return (
    <a
      className={`cta cta--${size}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="cta__label">{children}</span>
      <span className="cta__arrow" aria-hidden="true">
        →
      </span>
    </a>
  )
}
