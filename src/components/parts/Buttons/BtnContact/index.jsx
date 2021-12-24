import * as C from './styles'
import { Link } from 'react-router-dom'

export const ContactPrimary = ({secondary}) => {
  return (
      <Link to="contact" >
        <C.Button mobile>Contato</C.Button>
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
