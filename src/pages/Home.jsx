import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ContactModal } from '../components/Contact'
import { Contact, ContactNav } from '../components/Buttons'
import { LearnMore } from '../components/Buttons'
import logo from '../assets/logo.svg'
import Hamburger from '../assets/mobile/icon-hamburger.svg'
import slide1 from '../assets/desktop/image-slide-1.jpg'
import slide2 from '../assets/desktop/image-slide-2.jpg'
import slide3 from '../assets/desktop/image-slide-3.jpg'
import waveWhite from '../assets/desktop/bg-pattern-wavy-white.svg'
import waveRed from '../assets/desktop/bg-pattern-wave-red.svg'
import previousArrow from  '../assets/desktop/icon-arrow-previous.svg'
import forwardArrow from  '../assets/desktop/icon-arrow-next.svg'
import '../styles/home.css'
import '../styles/header.css'

export const Home = () => {
  const slidesInfo = [
    {
      slide: slide1,
      info1: "Lear Product Roadmap",
      info2: "2019 Project"
    },
    {
      slide: slide2,
      info1: "New Magestic Hotel",
      info2: "2018 Project"
    },
    {
      slide: slide3,
      info1: "Crypto Dashboard",
      info2: "2016 Project"
    }
  ]

  let [displayMobileMenu, setDisplayMobileMenu] = useState("navbar navbar-close")
  let [displayContact, setDisplayContact] = useState("modal-close")
  let [ carousel, setCarousel ] = useState(slidesInfo[0].slide)
  let [ carouselItems, setCarouselItems] = useState(0)
  let [ carouselInfo1, setCarouselInfo1] = useState(slidesInfo[0].info1)
  let [ carouselInfo2, setCarouselInfo2] = useState(slidesInfo[0].info2)
  
  function handleClickMenu () {
    if(displayMobileMenu === "navbar navbar-close") {
      setDisplayMobileMenu("navbar")
    } else {
      setDisplayMobileMenu("navbar navbar-close")
    }
  }

  function handleClickContact () {
    if(displayContact === "modal-close") {
      setDisplayContact("contact-content")
      handleClickMenu ()
    } else {
      setDisplayContact("modal-close")
    }
  }

  function handleCarouselNext () {
    if(carouselItems < slidesInfo.length - 1) {
      setCarouselItems(carouselItems = carouselItems + 1)
      setCarousel(slidesInfo[carouselItems].slide)
      setCarouselInfo1(slidesInfo[carouselItems].info1)
      setCarouselInfo2(slidesInfo[carouselItems].info2)
    }
  }
  
  function handleCarouselPrevious () {
    if(carouselItems > 0) {
      setCarouselItems(carouselItems = carouselItems - 1)
      setCarousel(slidesInfo[carouselItems].slide)
      setCarouselInfo1(slidesInfo[carouselItems].info1)
      setCarouselInfo2(slidesInfo[carouselItems].info2)
    }
  }

  return (
    <div className="container">
      {/* ---------------------------------------------------header */}
      <header className='header' >
        <div className='logo'>
          <img src={logo} alt="Logo" ></img>
        </div>
        <div className='hamburger-menu'>
          <img src={Hamburger} alt="Hamburger menu"  onClick={handleClickMenu} ></img>
        </div>
        <nav className={displayMobileMenu}>
          <ul>
            <li><a href='#about'>Sobre</a></li>
            <li><a href='#services'>Serviços</a></li>
            <li><a href='#project'>Projetos</a></li>
          </ul>
          <ContactNav test="primary" mobile={true} activeBtn={handleClickContact}/>
        </nav>
      </header>
      {/* ---------------------------------------------------hero */}
      <div className='hero'>
        <div className="hero-info">
          <h1>Branding & website design agency</h1>
          <p>
            We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.
          </p>
          <a href='#about'><LearnMore /></a>
        </div>
      </div>
      {/* ---------------------------------------------------sections */}
      <div className='sections'>
        <div className='section1' id='about'>
          <div className='section1-bg'></div>
        </div>
        <div className='section2'>
          <img src={waveRed} alt='red wave' className='red-wave'></img>
          <div className='section2-info'>
            <h2><span>Design </span>is strategic.</h2>
            <p>"A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm belivies that success lies in creative collaboration with our clients."</p>
            <Contact test="tertiary" activeBtn={handleClickContact} />
          </div>
        </div>
        <div className='section3'>
          <div className='section3-info'>
            <h2>Our approach for creating a winning brand</h2>
          </div>
        </div>
        <div className='section4' id='services'>
          <div className='section4-info'>
            <div className='info'>
              <span>01</span>
              <h3>Brand Strategy</h3>
              <p>Brand Strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.</p>
            </div>
            <div className='info'>
              <span>02</span>
              <h3>Brand Design</h3>
              <p>Keep the brand design unique and meaningful helps in communicating the brand's timeless value effectively.</p>
            </div>
            <div className='info'>
              <span>03</span>
              <h3>Web Design</h3>
              <p>A beutiful crafted website is the best tool for brand awareness, and ultimately results in increased revenues.</p>
            </div>
          </div>
        </div>
        <div className='section5' id='project'>
          <img src={waveWhite} alt='white wave' className='white-wave'></img>
          <div className='section5-info'>
            <h2>Brand naming & guidelines</h2>
            <div className='section5-arrows'>
              <img src={previousArrow} alt="previews arrow" onClick={handleCarouselPrevious}></img>
              <img src={forwardArrow} alt="forward arrow" onClick={handleCarouselNext}></img>
            </div>
          </div>
        </div>
        <div className='section6'>
          <div className='slides-info'>
            <img src={carousel} alt='slides' className='slides-illustration'></img>
            <div className='slides-text'>
              <h4>{carouselInfo1}</h4>
              <p>{carouselInfo2}</p>
            </div>
          </div>
        </div>
      </div>
    {/* ---------------------------------------------------footer */}
      <footer className='footer'>
        <img src={waveRed} alt='red wave' className='red-wave'></img>
        <div className='footer-content'>
          <h2>Let's build something great together.</h2>
          <Contact activeBtn={handleClickContact} />
        </div>
      </footer>
      <ContactModal testes={displayContact} activeBtn={handleClickContact}/>
      <Outlet />
    </div>
  )
}