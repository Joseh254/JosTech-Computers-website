import Home from "./pages/Home/Home";
import Header from "../Components/Header/Header";
import About from "./pages/About/About";
import FeaturedProducts from "./pages/Featuredproducts/FeaturedProducts";
import Help from "./pages/Help/Help";
import Footer from "../Components/Footer/Footer";
import Hotdeals from "./pages/Hotdeals/Hotdeals";
import Contact from "./pages/Contact/Contact";
import Signin from "./pages/Signin/Signin";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import AdminHome from "./pages/Admin/Home/AdminHome";
import AdminOrders from "./pages/Admin/AdminOrders/AdminOrders";
import AdminProducts from "./pages/Admin/AdminProducts/AdminProducts";
import AdminUsers from "./pages/Admin/AdminUsers/AdminUsers";
import Messages from "./pages/Admin/Messages/Messages";
import useUserStore from "../store/userStore";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = useUserStore((state) => state.user);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  return (
    <BrowserRouter>
      {!isAdmin && <Header />}
      <Routes>
        {isAdmin ? (
          <>
            <Route path="/AdminOrders" element={<AdminOrders />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/AdminProducts" element={<AdminProducts />} />
            <Route path="/AdminUsers" element={<AdminUsers />} />
            <Route path="/AdminHome" element={<AdminHome />} />
            <Route path="*" element={<AdminHome />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/FeaturedProducts" element={<FeaturedProducts />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/Hotdeals" element={<Hotdeals />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Account" element={<Account />} />
            <Route path="*" element={<Home />} />
          </>
        )}
      </Routes>
      {!isAdmin && <Footer />}
    </BrowserRouter>
  );
}

export default App;
