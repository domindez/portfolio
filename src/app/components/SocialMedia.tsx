import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
      </ul>
    </div>
  )
}
export default SocialMedia
