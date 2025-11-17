import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Value from './components/Value'
import Templates from './components/Templates'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(0,40,80,0.35),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.15),transparent_25%),linear-gradient(to_bottom,#020617,80%,#000)]" />
      <Navbar />
      <Hero />
      <Value />
      <Templates />
      <Testimonials />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Velion Automation</footer>
    </div>
  )
}

export default App
