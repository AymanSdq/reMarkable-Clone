import './App.css'
import ConnectSection from './components/ConnectSection'
import Digitalbook from './components/Digitalbook'
import EyeFriendly from './components/EyeFriendly'
import FocusSection from './components/FocusSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import InformationRem from './components/InformationRem'
import Newsletter from './components/Newsletter'
import NoteTaking from './components/NoteTaking'
import RemarkvsTablette from './components/RemarkvsTablette'
import SafeRemark from './components/SafeRemark'
import SmallSection from './components/SmallSection'
import Thinproduct from './components/Thinproduct'

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
          <FocusSection />
          <Newsletter />
          <RemarkvsTablette /> {/* // TODO : Finish the vs  */}
          <Thinproduct />
          <SafeRemark />
      </main>
  )
}

export default App
