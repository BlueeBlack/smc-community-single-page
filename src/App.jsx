import Header from './components/Header'
import Hero from './components/Hero'
import InsideSection from './components/InsideSection'
import Disclaimer from './components/Disclaimer'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InsideSection />
        <Disclaimer />
      </main>
      <ThemeToggle />
    </>
  )
}
