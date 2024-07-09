import Home from "./pages/Home";
import Header from "../Components/Header";
import About from "./pages/About";
import FeaturedProducts from "./pages/FeaturedProducts";
import Help from "./pages/Help";
import Footer from "../Components/Footer";
import Hotdeals from "./pages/Hotdeals";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Account from "./pages/Account";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/FeaturedProducts" element={<FeaturedProducts />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Hotdeals" element={<Hotdeals />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
