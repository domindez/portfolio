import Image from 'next/image'
import '../styles/me.css'
import Link from 'next/link'

const Me = () => {
  return (
    <section className='me' id='me'>

      <div className='text-container'>
        <h1>Daniel Domínguez</h1>
        <h2>{'< Full Stack Developer />'}</h2>
        <Link className='contact-btn' href='mailto:hola@domindez.com'>Contrátame</Link>
      </div>
      <Image src='/img/daniel dominguez.jpg' alt='Daniel Domínguez desarrollador web' width={500} height={500} />

    </section>
  )
}
export default Me
