/* eslint-disable camelcase */
import Image from 'next/image'
import '../styles/me.css'
import Link from 'next/link'
import SocialMedia from './SocialMedia'

const Me = () => {
  return (
    <section className='me'>

      <div className='text-container'>
        <SocialMedia />
        <h1>Daniel Domínguez</h1>
        <h2>{'< web developer />'}</h2>

        <Link href='#' className='project-btn'>
          <span className='project-btn'>Mis proyectos</span>
        </Link>
      </div>
      <Image src='/img/daniel dominguez.jpg' alt='Daniel Domínguez desarrollador web' width={500} height={500} />

    </section>
  )
}
export default Me
