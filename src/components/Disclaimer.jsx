import { disclaimer } from '../data/content'
import './Disclaimer.css'

export default function Disclaimer() {
  return (
    <footer className="disclaimer page">
      <hr className="rule" />
      <p className="disclaimer__text">{disclaimer}</p>
    </footer>
  )
}
