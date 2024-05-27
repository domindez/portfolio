import Image from 'next/image'
import Link from 'next/link'

interface Props{
  name: string
  imgName: string
  url: string
  text: string
}

const PortfolioProject = ({ name, imgName, url, text } : Props) => {
  return (
    <article className='project-container'>
      <Image src={`/img/projects/${imgName}.webp`} width={100} height={100} alt={`logo de ${name}`} />
      <div className='project'>
        <div className='info'>
          <h5>{name}</h5>
          <p>{text}</p>
          <Link href={url} target='_blank' rel='noreferrer'>Ir a la web</Link>
        </div>
      </div>
    </article>
  )
}
export default PortfolioProject
