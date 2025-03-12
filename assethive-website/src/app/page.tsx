import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Impact from '@/components/Impact'
import Roadmap from '@/components/Roadmap'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Impact />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  )
}
