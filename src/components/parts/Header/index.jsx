import * as C from './styles'
import { Logo } from '../Logo'
import { ContactPrimary } from '../Buttons/BtnContact'
import { ContactSecondary } from '../Buttons/BtnContact'
import { ContactTertiary } from '../Buttons/BtnContact'

export const Header = () => {
  return (
    <C.Container>
      <Logo className="logo" />
      <C.Navbar>
        <ul>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Projetos</li>
        </ul>
        <ContactPrimary />
      </C.Navbar>
    </C.Container>
  )
} 