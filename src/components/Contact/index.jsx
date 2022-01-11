import React from 'react'
import * as C from './styles'
import { Submit } from '../Buttons'

export const ContactModal = ({testes, activeBtn}) => {
  return (
    <C.Contact>
      <div className={testes}>
        <div className="form-content">
          <span className='contact-close' onClick={activeBtn}>X</span>
          <form
            action="https://formsubmit.co/contato@ladeia.dev.br"
            method="POST"
            className="form"
          >
            <input
              type="hidden"
              name="_next"
              value="http://ladeia.dev.br/sent"
            ></input>
            <label>Nome</label>
            <input type="text" name="name"></input>
            <label>Sobrenome</label>
            <input type="text" name="sobrenome"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Mensagem</label>
            <textarea name="message"></textarea>
            <Submit />
          </form>
        </div>
      </div>
    </C.Contact>
  )
}
