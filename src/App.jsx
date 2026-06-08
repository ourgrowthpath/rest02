import Header    from './components/Header'
import Footer    from './components/Footer'
import Hero      from './sections/Hero'
import Stats     from './sections/Stats'
import About     from './sections/About'
import Services  from './sections/Services'
import Portfolio from './sections/Portfolio'
import Contact   from './sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
