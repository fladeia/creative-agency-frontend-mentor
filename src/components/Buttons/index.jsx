import React from 'react'
import * as C from './styles'

export const Contact = ({activeBtn, test}) => {
  return (
    <C.Button test={test} onClick={activeBtn}><span>Contato</span></C.Button>
  )
}

export const ContactNav = ({activeBtn, test, mobile}) => {
  return (
    <C.ButtonContactNav test={test} mobile={mobile} onClick={activeBtn}><span>Contato</span></C.ButtonContactNav>
  )
}

export const Submit = () => {
  return (
      <C.ButtonSubmit type='submit'><span>Enviar</span></C.ButtonSubmit>
  )
}

export const LearnMore = () => {
  return (
    <C.ButtonMoreInfo>Saiba Mais</C.ButtonMoreInfo>
  )
}
