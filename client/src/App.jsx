import Home from "./pages/Home"
import Header from "../Components/Header"
import About from "./pages/About"
import FeaturedProducts from "./pages/FeaturedProducts"
import Contact from "./pages/Contact"
import Footer from "../Components/Footer"
import Hotdeals from "./pages/Hotdeals"

import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/FeaturedProducts" element={<FeaturedProducts/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Hotdeals" element={<Hotdeals/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
   
 
    </>
  )
}

export default App
