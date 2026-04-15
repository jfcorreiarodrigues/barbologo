import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Narrative from './components/Narrative'
import Services  from './components/Services'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  return (
    <div className="bg-barbo-bg text-barbo-text min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Narrative />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
