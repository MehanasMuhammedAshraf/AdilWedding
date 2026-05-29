import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { PageLoader } from './components/PageLoader'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { CoupleSection } from './components/CoupleSection'
import { QuranVerse } from './components/QuranVerse'
import { Story } from './components/Story'
import { Location } from './components/Location'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <div className="premium-grain pointer-events-none fixed inset-0 z-[55]" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <CoupleSection />
        <QuranVerse />
        <Location />
        <Story />
      </main>
      <Footer />
    </>
  )
}

export default App
