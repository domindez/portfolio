import '../styles/about.css'

const About = () => {
  return (
    <section id='about'>
      <h3 className='section-title'>Sobre mí</h3>

      <p className='bio'>
        ¡Hola! Soy Dani, desarrollador Full Stack, creador de Trivify.es y Barmanager.app. Disfruto dándole forma a mis propias ideas y convirtiéndolas en servicios útiles para los demás. Ayudo a empresas a desarrollar sus proyectos y superar sus desafíos tecnológicos.
      </p>

      <div className='stacks-container'>
        <span>react</span>
        <span>nextjs</span>
        <span>nodejs</span>
        <span>express</span>
        <span>azure</span>
        <span>firebase</span>
        <span>mongodb</span>
        <span>git</span>
        <span>javascript</span>
        <span>typescript</span>
        <span>css</span>
        <span>sass</span>
        <span>electron</span>
        <span>wordpress</span>
      </div>

    </section>
  )
}
export default About
