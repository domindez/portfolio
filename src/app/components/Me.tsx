/* eslint-disable camelcase */
import Image from 'next/image'
import '../styles/me.css'
import SocialMedia from './SocialMedia'

const Me = () => {
  return (
    <section className='me'>

      <div className='text-container'>
        <h1>Daniel Domínguez</h1>
        <h2>{'< web developer />'}</h2>

        {/* <Link href='#' className='project-btn'>
          <span className='project-btn'>Mis trabajos</span>
        </Link> */}
        <SocialMedia />
      </div>
      <Image src='/img/daniel dominguez.jpg' alt='Daniel Domínguez desarrollador web' width={500} height={500} />

    </section>
  )
}
export default Me
