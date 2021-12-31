import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="contact" element={<Contact />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}