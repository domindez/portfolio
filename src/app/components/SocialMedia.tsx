import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import '../styles/social-media.css'

const SocialMedia = () => {
  return (
    <div className='social-media'>
      <ul>
        <li>
          <Link href='https://github.com/domindez' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon className='social-icon' icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link href='https://www.linkedin.com/in/domindez/' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
          </Link>
        </li>
        <li>
          <Link href='https://www.upwork.com/freelancers/~014f9e51a9a1e79437' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon className='social-icon' icon={faUpwork} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default SocialMedia
