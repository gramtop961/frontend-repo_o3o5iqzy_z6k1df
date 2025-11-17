import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import USPs from './components/USPs'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F7F9FA] text-slate-800">
      <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] bg-white text-[#1D2B3A] px-4 py-2 rounded shadow">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Services />
        <USPs />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
