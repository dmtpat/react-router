import { useState, useEffect } from 'react'

import axios from 'axios'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./components/Header.components"
import Footer from "./components/Footer.components"
import Page_home from "./pages/page_home"

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' Component={Page_home} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
