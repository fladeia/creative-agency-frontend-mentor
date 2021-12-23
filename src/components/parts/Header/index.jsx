import * as C from './styles'
import { Logo } from '../Logo'
import { ContactPrimary } from '../Buttons/BtnContact'
import Hamburger from '../../../assets/mobile/icon-hamburger.svg'
 
export const Header = () => {
  return (
    <C.Container>
      <Logo className="logo" />
      <img src={Hamburger} alt="Hamburger menu" className='hamburger-menu'></img>
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