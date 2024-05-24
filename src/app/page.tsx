import Me from '@/app/components/Me'
import './styles/main-page.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function Home () {
  return (
    <main className='main-page'>
      <NavBar />
      <Me />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
