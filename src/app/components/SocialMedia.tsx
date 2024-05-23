import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import '../styles/social-media.css'

const SocialMedia = () => {
  return (
    <div className='social-media'>
      <ul>
        <li>
          <Link href=''>
            <FontAwesomeIcon className='social-icon' icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link href=''>
            <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
          </Link>
        </li>
        <li>
          <Link href=''>
            <FontAwesomeIcon className='social-icon' icon={faTwitter} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default SocialMedia
