import useTheme from '../hooks/useTheme'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button className="toggle" onClick={toggle} aria-label={`Switch to ${next} mode`} type="button">
      <span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
    </button>
  )
}
