import { brand } from '../data/content'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="page header__inner">
        <span className="header__mark" aria-hidden="true">
          <span className="header__bar" />
        </span>
        <span className="header__text">
          <span className="header__name">{brand.name}</span>
          <span className="header__tagline">{brand.tagline}</span>
        </span>
      </div>
    </header>
  )
}
