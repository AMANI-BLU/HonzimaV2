import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollToAnchor from './components/ScrollToAnchor'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import ClientTestimonials from './components/ClientTestimonials'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import AllProjects from './pages/AllProjects'
import './App.css'

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Portfolio featuredOnly={true} />
    <Process />
    <ClientTestimonials />
  </>
)

function App() {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const scanAndObserve = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        if (!el.classList.contains('active')) {
          observer.observe(el);
        }
      });
    };

    // Initial scan
    scanAndObserve();

    // Watch for dynamic content (like portfolio projects)
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="app-container">
      <div className="mesh-gradient"></div>
      <Nav />
      <ScrollToAnchor />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<AllProjects />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
