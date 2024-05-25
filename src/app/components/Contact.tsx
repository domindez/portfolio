import { faComment } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/contact.css'
import Link from 'next/link'

const Contact = () => {
  return (
    <Link href='mailto:hola@domindez.com' className='contact'>
      <FontAwesomeIcon icon={faComment} /> Contrátame
    </Link>
  )
}
export default Contact
