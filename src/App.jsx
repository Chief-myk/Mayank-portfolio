import FeatureCard from './components/FeatureCard'
import Hero from './components/Hero'
import LogoShowCase from './components/LogoShowCase'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import About from './components/About'

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <LogoShowCase/>
      <Showcase/>
      <FeatureCard/>
    </main>
  )
}

export default App