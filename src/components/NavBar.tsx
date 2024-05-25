import Link from 'next/link'
import '../styles/nav-bar.css'

const NavBar = () => {
  return (
    <nav className='top-nav-bar'>
      <ul>
        <li>
          <Link href='#me'>Inicio</Link>
        </li>
        <li>
          <Link href='#about'>Sobre mí</Link>
        </li>
        <li>
          <Link href='#portfolio'>Proyectos</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
