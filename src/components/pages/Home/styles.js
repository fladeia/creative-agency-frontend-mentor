import styled from 'styled-components'
import ImageHeroDesktop from '../../../assets/desktop/image-hero.jpg'
import ImageHeroTablet from '../../../assets/tablet/image-hero.jpg'
import ImageHeroMobile from '../../../assets/mobile/image-hero.jpg'

export const Container = styled.div`
  min-height: 100vh;

  border: 1px solid red;
`

export const Hero = styled.div`
  height: 800px;
  background-image: url(${ImageHeroDesktop});
  background-repeat: no-repeat;
  background-position: right;

  border: 1px solid green;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    height: 606px;
    background-image: url(${ImageHeroTablet});
  }

  @media (max-width: 768px) {
    height: 606px;
    display: flex;
    align-items: flex-end;
    background-image: url(${ImageHeroMobile});
    background-position: top;
    background-size: contain;
  }
`

export const Content = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
  }
`
