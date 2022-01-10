import { Link } from 'react-router-dom'
import { Submit } from  '../Buttons'

import '../styles/contact.css'

export const Contact = () => {
  return (
    <div className='contact-content'>
      <div className='form-content'>
        <Link to='/' className='contact-close'>X</Link>
        <form action="https://formsubmit.co/ladeiadev@gmail.com" method="POST" className='form'>
          <input type="hidden" name="_next" value="http://localhost:3000/sent"></input>
          <label>Nome</label>
          <input type='text' name='name' ></input>
          <label>Sobrenome</label>
          <input type='text' name='sobrenome' ></input>
          <label>Email</label>
          <input type='email' name='email' ></input>
          <label>Mensagem</label>
          <textarea name="message"></textarea>
          <Submit />
        </form>
      </div>
    </div>
  )
}