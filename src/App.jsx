import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Roadmap from './components/Roadmap'
import ParticleBackground from './components/ParticleBackground'
import AuroraBackground from './components/AuroraBackground'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Background Effects */}
      <ParticleBackground />
      <AuroraBackground />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Roadmap />
        </main>
      </div>
    </div>
  )
}

export default App
