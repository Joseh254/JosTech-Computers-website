import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./AdminHeader.css"
function AdminHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div>
    <nav className='nav'>
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
      </ul>
    </nav>

    </div>
    </>
  )
}

export default AdminHeader