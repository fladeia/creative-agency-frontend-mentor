import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BtnLearnMore } from '../Buttons/BtnLearnMore'
import { ContactPrimary } from '../Buttons/BtnContact'
import logo from '../../assets/logo.svg'
import Hamburger from '../../assets/mobile/icon-hamburger.svg'
import strategic from  '../../assets/desktop/image-strategic.jpg'
import slide1 from '../../assets/desktop/image-slide-1.jpg'
// import slide2 from '../../assets/desktop/image-slide-2.jpg'
// import slide3 from '../../assets/desktop/image-slide-3.jpg'
import waveWhite from '../../assets/desktop/bg-pattern-wavy-white.svg'
import waveRed from '../../assets/desktop/bg-pattern-wave-red.svg'
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
      {/* ---------------------------------------------------section */}
      <div className='sections'>
        <div className='section1'>
          <img src={strategic} alt='illustration 1' className='illustration1'></img>
        </div>
        <div className='section2'>
          <img src={waveRed} alt='red wave' className='red-wave'></img>
        </div>
        <div className='section3'>3</div>
        <div className='section4'>4</div>
        <div className='section5'>
          <img src={waveWhite} alt='white wave' className='white-wave'></img>
        </div>
        <div className='section6'>
          <img src={slide1} alt='illustration 1' className='illustration2'></img>
        </div>
      </div>

      <Outlet />
    </div>
  )
}