
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import Page_home from "./pages/page_home"
import Page_chiSiamo from "./pages/page_chiSiamo"
import Page_prodotti from "./pages/page_prodotti"

function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route Component={DefaultLayout} >
          <Route path='/' Component={Page_home} />
          <Route path='/chiSiamo' Component={Page_chiSiamo} />
          <Route path='/prodotti' Component={Page_prodotti} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
