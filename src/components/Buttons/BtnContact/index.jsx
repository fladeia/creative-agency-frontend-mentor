import * as C from './styles'
import { Link } from 'react-router-dom'

export const ContactPrimary = ({activeBtn}) => {
  return (
      <Link to="contact" >
        <C.Button mobile onClick={activeBtn}>Contato</C.Button>
      </Link>
  )
}

export const ContactSecondary = () => {
  return (
    <Link to="contact" >
      <C.ButtonSecondary>Contato</C.ButtonSecondary>
    </Link>
  )
}

export const ContactTertiary = () => {
  return (
    <Link to="contact" >
      <C.Button tertiary><span>Contato</span></C.Button>
    </Link>
  )
}

export const SubmitPrimary = () => {
  return (
      <C.ButtonSubmit type='submit'>Enviar</C.ButtonSubmit>
  )
}

export const BtnLearnMore = () => {
  return (
    <C.ButtonMore>Saiba Mais</C.ButtonMore>
  )
}
