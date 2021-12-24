import * as C from './styles'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <C.Container>
      Contato
      <Link to="/" >Home</Link>
    </C.Container>
  )
}