import * as C from './styles'
import { Link } from 'react-router-dom'

export const Contact = ({activeBtn, test}) => {
  return (
      <Link to="contact" >
        <C.Button test={test} mobile onClick={activeBtn}><span>Contato</span></C.Button>
      </Link>
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
