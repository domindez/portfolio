import Me from '@/components/Me'
import '../styles/main-page.css'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <main className='main-page'>
      <NavBar />
      <Me />
      <About />
      <Portfolio />
      <Footer />
    </main>
  )
}
