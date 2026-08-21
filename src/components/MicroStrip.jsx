import './MicroStrip.css'

export default function MicroStrip({ children }) {
  return (
    <p className="strip">
      <span className="strip__diamond" aria-hidden="true">
        ◆
      </span>
      {children}
    </p>
  )
}
