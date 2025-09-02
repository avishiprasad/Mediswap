import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from 'react';
import { HeartIcon, UploadIcon, SearchIcon, UsersIcon } from '../Icons';

function Navbar({ currentPage, setCurrentPage }) {
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
            {[
              { id: 'home', label: 'Home', icon: HeartIcon },
              { id: 'signup', label: 'Sign In', icon: UsersIcon },
              { id: 'upload', label: 'Donate', icon: UploadIcon },
              { id: 'search', label: 'Find Medicine', icon: SearchIcon }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`nav-link ${currentPage === id ? 'active' : ''}`}
              >
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;