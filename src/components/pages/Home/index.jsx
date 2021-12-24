import * as C from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from '../../parts/Header'
import { BtnLearnMore } from '../../parts/Buttons/BtnLearnMore'

export const Home = () => {
  return (
    <C.Container>
      <Header />
      <C.Hero>
        <C.Content>
          <h1>Branding & website design agency</h1>
          <p>
            We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.
          </p>
          <BtnLearnMore />
        </C.Content>
      </C.Hero>
      <Outlet />
    </C.Container>
  )
}