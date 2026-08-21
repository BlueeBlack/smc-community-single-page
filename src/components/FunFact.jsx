import './FunFact.css'

export default function FunFact({ label, children }) {
  return (
    <aside className="fact">
      <span className="fact__label">
        <span aria-hidden="true">◆</span> {label}
      </span>
      <p className="fact__body">{children}</p>
    </aside>
  )
}
