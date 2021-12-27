import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BtnLearnMore } from '../Buttons/BtnLearnMore'
import { ContactPrimary } from '../Buttons/BtnContact'
import logo from '../../assets/logo.svg'
import Hamburger from '../../assets/mobile/icon-hamburger.svg'
import '../styles/home.css'
import '../styles/header.css'

export const Home = () => {
  let [displayMobileMenu, setDisplayMobileMenu] = useState("navbar navbar-close")
  
  function handleClick () {
    if(displayMobileMenu === "navbar navbar-close") {
      setDisplayMobileMenu("navbar")
    } else {
      setDisplayMobileMenu("navbar navbar-close")
    }
  }

  console.log(displayMobileMenu);
  return (
    <div className="container">
      {/* ---------------------------------------------------header */}
      <header className='header' >
        <div className='logo'>
          <img src={logo} alt="Logo" ></img>
        </div>
        <div className='hamburger-menu'>
          <img src={Hamburger} alt="Hamburger menu"  onClick={handleClick} ></img>
        </div>
        <nav className={displayMobileMenu}>
          <ul>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Projetos</li>
          </ul>
          <ContactPrimary />
        </nav>
      </header>
      {/* ---------------------------------------------------hero */}
      <div className='hero'>
        <div className="hero-info">
          <h1>Branding & website design agency</h1>
          <p>
            We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.
          </p>
          <BtnLearnMore />
        </div>
      </div>
      {/* ---------------------------------------------------section1 */}
      <Outlet />
    </div>
  )
}