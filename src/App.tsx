import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import TargetAudience from './components/TargetAudience'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Features />
      <TargetAudience />
    </div>
  )
}

export default App
