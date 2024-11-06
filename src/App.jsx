import './App.css'
import ConnectSection from './components/ConnectSection'
import Digitalbook from './components/Digitalbook'
import EyeFriendly from './components/EyeFriendly'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import InformationRem from './components/InformationRem'
import NoteTaking from './components/NoteTaking'
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
          {/* // TODO : add the section that left : Share your ideas. Live. */}
          <NoteTaking />
          <ConnectSection />

      </main>
  )
}

export default App
