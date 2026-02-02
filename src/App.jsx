import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.components"
import Footer from "./components/Footer.components"

function App() {


  return (
    <>
      <Header />
      <h1>questa è la pagina</h1>
      <Footer />
    </>
  )
}

export default App
