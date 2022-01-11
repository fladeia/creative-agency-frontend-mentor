import React from 'react'
import { Link } from 'react-router-dom'
import { SubmitPrimary } from  '../Buttons/BtnContact'

import '../styles/contact.css'

export const Contact = () => {
  return (
    <div className='contact-content'>
      <div className='form-content'>
        <Link to='/' className='contact-close'>X</Link>
        <form action="https://formsubmit.co/contato@ladeia.dev.br" method="POST" className='form'>
          <input type="hidden" name="_next" value="https://ladeia.dev.br/sent"></input>
          <label>Nome</label>
          <input type='text' name='name' ></input>
          <label>Sobrenome</label>
          <input type='text' name='sobrenome' ></input>
          <label>Email</label>
          <input type='email' name='email' ></input>
          <label>Mensagem</label>
          <textarea name="message"></textarea>
          <SubmitPrimary />
        </form>
      </div>
    </div>
  )
}