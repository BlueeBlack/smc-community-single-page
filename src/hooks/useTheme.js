import { useEffect, useState } from 'react'

const KEY = 'smc-theme'

function readStored() {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = readStored()
    if (stored === 'light' || stored === 'dark') return stored
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
