import Link from 'next/link'
import '../styles/nav-bar.css'

const NavBar = () => {
  return (
    <nav className='top-nav-bar'>
      <ul>
        <li>
          <Link href='#'>Inicio</Link>
        </li>
        <li>
          <Link href='#'>Sobre mí</Link>
        </li>
        <li>
          <Link href='#'>Proyectos</Link>
        </li>
        <li>
          <Link href='#'>Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
