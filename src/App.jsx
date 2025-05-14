import FeatureCard from './components/FeatureCard'
import Hero from './components/Hero'
import LogoShowCase from './components/LogoShowCase'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import About from './components/About'
// import Exp from './components/Exp'

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <LogoShowCase/>
      <Showcase/>
      <FeatureCard/>
      {/* <Exp/> */}
    </main>
  )
}

export default App