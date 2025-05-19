import FeatureCard from './components/FeatureCard'
import Hero from './components/Hero'
import LogoShowCase from './components/LogoShowCase'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import About from './components/About'
import Exp from './components/Exp'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
      <TechStack/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App