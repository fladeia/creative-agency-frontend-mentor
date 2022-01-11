import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './components/pages/Home'
import { Contact } from './components/pages/Contact'
import { Sent } from "./components/pages/Sent";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="contact" element={<Contact />} ></Route>
          <Route path="sent" element={<Sent />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}