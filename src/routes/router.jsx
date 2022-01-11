import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from '../pages/Home'
import { Sent } from "../pages/Sent";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="sent" element={<Sent />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}