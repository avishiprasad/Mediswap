import { NavLink } from "react-router-dom";
import "../App.css";
import React from 'react';
import { HeartIcon, UploadIcon, SearchIcon, UsersIcon } from '../Icons';

function Navbar() {
  const links = [
    { path: "/", label: "Home", icon: HeartIcon },
    { path: "/signup", label: "Sign In", icon: UsersIcon },
    { path: "/upload", label: "Donate", icon: UploadIcon },
    { path: "/search", label: "Find Medicine", icon: SearchIcon }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">
            <div className="logo-icon">
              <HeartIcon />
            </div>
            <span className="logo-text">MediSwap</span>
          </div>

          <div className="nav-links">
            {links.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
