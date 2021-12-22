import * as C from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from '../../parts/Header'

export const Home = () => {
  return (
    <C.Container>
      <Header />
      <Outlet />
    </C.Container>
  )
}