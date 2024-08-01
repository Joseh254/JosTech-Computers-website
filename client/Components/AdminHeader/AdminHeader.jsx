import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";
import "./AdminHeader.css";

function AdminHeader() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate(); // Corrected usage of useNavigate
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const changeUserInformation = useUserStore((state) => state.changeUserInformation);

  useEffect(() => {
    setIsLoggedIn(!!user); // Convert user to a boolean to set isLoggedIn
  }, [user]);

  const handleLogout = () => {
    changeUserInformation(null); 
    setIsLoggedIn(false); 
    navigate('/Login'); // Correctly navigate to the Login page
  };

  return (
    <>
      <div>
        <nav className="nav">
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink
                to="/AdminHome"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AdminProducts"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/AddProduct"
                className={({ isActive }) => (isActive ? "active" : "")}
              > 
                Add A Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AdminOrders"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                View Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AdminUsers"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                View Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddUser"
                className={({ isActive }) => (isActive ? "active" : "")}
              > 
                Add An Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Messages"
                className={({ isActive }) => (isActive ? "active" : "")}
              > 
                Messages
              </NavLink>
            </li>


          </ul>
          {isLoggedIn && <button onClick={handleLogout} className="adminlogout">Log Out</button>}
        </nav>
      </div>
    </>
  );
}

export default AdminHeader;
