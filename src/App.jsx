import './App.css'
import Digitalbook from './components/Digitalbook'
import EyeFriendly from './components/EyeFriendly'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import InformationRem from './components/InformationRem'
import SmallSection from './components/SmallSection'

function App() {
  

  return (
      <main>
          <Header />
          <HeroSection />
          <SmallSection />
          <InformationRem />
          <Digitalbook />
          <EyeFriendly />
      </main>
  )
}

export default App
