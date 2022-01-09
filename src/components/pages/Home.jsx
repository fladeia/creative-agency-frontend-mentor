 import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BtnLearnMore } from '../Buttons/BtnContact'
import { ContactPrimary } from '../Buttons/BtnContact'
import { ContactSecondary } from  '../Buttons/BtnContact'
import { ContactTertiary } from  '../Buttons/BtnContact'
import logo from '../../assets/desktop/logo.png'
import Hamburger from '../../assets/mobile/icon-hamburger.svg'
import slide1 from '../../assets/desktop/image-slide-1.jpg'
import slide2 from '../../assets/desktop/image-slide-2.jpg'
import slide3 from '../../assets/desktop/image-slide-3.jpg'
import slide4 from '../../assets/desktop/image-slide-4.jpg'
import slide5 from '../../assets/desktop/image-slide-5.jpg'
import waveWhite from '../../assets/desktop/bg-pattern-wavy-white.svg'
import waveYellow from '../../assets/desktop/bg-pattern-wave-yellow.svg'
import previousArrow from  '../../assets/desktop/icon-arrow-previous-secondary.svg'
import forwardArrow from  '../../assets/desktop/icon-arrow-next-secondary.svg'
import '../styles/home.css'
import '../styles/header.css'

export const Home = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5]
  const slidesInfo = [
    {
      info1: "URL shortening API landing page",
      info2: "Landing page + API",
      url: "https://brave-poincare-1450ec.netlify.app/"
    },
    {
      info1: "Sunnyside agency landing page",
      info2: "Landing page",
      url: "https://sad-bassi-eaf8bc.netlify.app"
    },
    {
      info1: "Space tourism",
      info2: "multi-page website",
      url: "https://gallant-spence.netlify.app/"
    },
    {
      info1: "Base Apparel coming soon page",
      info2: "Landing page",
      url: "https://jolly-bhaskara-4794a9.netlify.app/"
    },
    {
      info1: "IP Address Tracker",
      info2: "Landing page + API",
      url: "https://pedantic-meninsky-61e802.netlify.app/"
    }
  ]

  let [displayMobileMenu, setDisplayMobileMenu] = useState("navbar navbar-close")
  let [ carousel, setCarousel ] = useState(slides[0]) 
  let [ carouselItems, setCarouselItems] = useState(0) 
  let [ carouselInfo1, setCarouselInfo1] = useState(slidesInfo[0].info1)
  let [ carouselInfo2, setCarouselInfo2] = useState(slidesInfo[0].info2)
  let [ carouselUrl, setCarouselUrl] = useState(slidesInfo[0].url)
  
  function handleClick () {
    if(displayMobileMenu === "navbar navbar-close") {
      setDisplayMobileMenu("navbar")
    } else {
      setDisplayMobileMenu("navbar navbar-close")
    }
  }

  function handleCarouselNext () {
    if(carouselItems < slides.length - 1) {
      setCarouselItems(carouselItems = carouselItems + 1)
      setCarousel(slides[carouselItems])
      setCarouselInfo1(slidesInfo[carouselItems].info1)
      setCarouselInfo2(slidesInfo[carouselItems].info2)
      setCarouselUrl(slidesInfo[carouselItems].url)
    }
  }
  
  function handleCarouselPrevious () {
    if(carouselItems > 0) {
      setCarouselItems(carouselItems = carouselItems - 1)
      setCarousel(slides[carouselItems])
      setCarouselInfo1(slidesInfo[carouselItems].info1)
      setCarouselInfo2(slidesInfo[carouselItems].info2)
      setCarouselUrl(slidesInfo[carouselItems].url)
    }
  }

  return (
    <div className="container">
      {/* ---------------------------------------------------header */}
      <header className='header' >
        <div className='logo'>
          <img src={logo} alt="Logo LadeiaDev" ></img>
        </div>
        <div className='hamburger-menu'>
          <img src={Hamburger} alt="Hamburger menu"  onClick={handleClick} ></img>
        </div>
        <nav className={displayMobileMenu}>
          <ul>
            <li><a href='#about'>Sobre</a></li>
            <li><a href='#services'>Serviços</a></li>
            <li><a href='#project'>Portfolio</a></li>
          </ul>
          <ContactPrimary activeBtn={handleClick}/>
        </nav>
      </header>
      {/* ---------------------------------------------------hero */}
      <div className='hero'>
        <div className='hero-bg-layer'>
          <div className="hero-info">
            <h1>website <span>online</span> em até <span>24hr</span></h1>
            <p>Diponibilizo seu website em até 24hr para os modelos oferecidos. Se você preferir personalizar entre em contato.</p>
            <a href='#services'><BtnLearnMore /></a>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------sections */}
      <div className='sections'>
        <div className='section1' id='about'>
          <div className='section1-bg'></div>
        </div>
        <div className='section2'>
          <img src={waveYellow} alt='yellow wave' className='yellow-wave'></img>
          <div className='section2-info'>
            <h2><span>Website </span></h2>
            <p>é seu lugar no mundo virtual, internet, que está disponível 24hs todos os dias do ano. Você que precisa divulgar seu negócio, serviço, ideia, ou qualquer coisa o website é seu melhor parceiro.</p>
            <ContactTertiary />
          </div>
        </div>
        <div className='section3'>
          <div className='section3-info'>
            <h2>Serviços para criação das suas ideias</h2>
          </div>
        </div>
        <div className='section4' id='services'>
          <div className='section4-info'>
            <div className='info'>
              <span>01</span>
              <h3>Website</h3>
              <p>pode ter uma ou mais páginas. Sua navegação é feita por menu com links que direcionam para as outras páginas.</p>
            </div>
            <div className='info'>
              <span>02</span>
              <h3>Landing page</h3>
              <p>é composta por uma página contendo seções com os assuntos desejados.</p>
            </div>
            </div>
        </div>
        <div className='section5' id='project'>
          <img src={waveWhite} alt='white wave' className='white-wave'></img>
          <div className='section5-info'>
            <h2>Portfolio</h2>
            <div className='section5-arrows'>
              <img src={previousArrow} alt="previews arrow" className='preview-arrow' onClick={handleCarouselPrevious}></img>
              <img src={forwardArrow} alt="forward arrow" className='forward-arrow' onClick={handleCarouselNext}></img>
            </div>
          </div>
        </div>
        <div className='section6'>
          <div className='slides-info'>
            <a href={carouselUrl} target='_blank'>
              <img src={carousel} alt='slides' className='slides-illustration'></img>
            </a>
            <div className='slides-text'>
              <h4>{carouselInfo1}</h4>
              <p>{carouselInfo2}</p>
            </div>
          </div>
        </div>
      </div>
    {/* ---------------------------------------------------footer */}
      <footer className='footer'>
        <img src={waveYellow} alt='yellow wave' className='yellow-wave'></img>
        <div className='footer-content'>
          <h2>Vamos construir seu lugar na internet juntos.</h2>
          <ContactSecondary />
        </div>
      </footer>
      <Outlet />
    </div>
  )
}