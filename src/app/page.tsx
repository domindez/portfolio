import Me from '@/app/components/Me'
import './styles/main-page.css'
import NavBar from './components/NavBar'

export default function Home () {
  return (
    <main className='main-page'>
      <NavBar />
      <Me />
    </main>
  )
}
