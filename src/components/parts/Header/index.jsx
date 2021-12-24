import * as C from './styles'
import { useState } from 'react'
import { Logo } from '../Logo'
import { ContactPrimary } from '../Buttons/BtnContact'
import Hamburger from '../../../assets/mobile/icon-hamburger.svg'
 
export const Header = () => {
  let [displayMobileMenu, setDisplayMobileMenu] = useState(false)
  
  function handleClick () {
    if(displayMobileMenu === false) {
      setDisplayMobileMenu(true)
    } else {
      setDisplayMobileMenu(false)
    }
  }

  return (
    <C.Container>
      <Logo className="logo" />
      <img src={Hamburger} alt="Hamburger menu" className='hamburger-menu' onClick={handleClick} ></img>
      <C.Navbar displayMobileMenu={displayMobileMenu}>
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