import { Link } from 'react-router-dom'

import '../styles/contact.css'

export const Contact = () => {
  return (
    <div className='contact-content'>
      <Link to='/' className='contact-close'>X</Link>
      Contato
    </div>
  )
}