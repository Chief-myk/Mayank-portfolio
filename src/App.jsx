import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Showcase from './components/Showcase'

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Showcase/>
    </main>
  )
}

export default App