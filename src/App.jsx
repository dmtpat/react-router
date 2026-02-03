import { useState, useEffect } from 'react'

import axios from 'axios'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import Page_home from "./pages/page_home"
import Page_chiSiamo from "./pages/page_chiSiamo"

function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route Component={DefaultLayout} >
          <Route path='/' Component={Page_home} />
          <Route path='/chiSiamo' Component={Page_chiSiamo} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
