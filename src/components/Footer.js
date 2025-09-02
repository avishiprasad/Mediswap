import "../App.css";
import React, { useState } from 'react';
import { HeartIcon, UsersIcon, UploadIcon, SearchIcon, MapPinIcon, ShieldIcon, ClockIcon, PillIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline';


function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <HeartIcon />
                </div>
                <span>MediSwap</span>
              </div>
              <p>
                Building a healthier community through medicine sharing. Join us in reducing waste and helping those in need.
              </p>
            </div>
            
            <div className="footer-links">
              <div>
                <h4>Quick Links</h4>
                <div className="link-list">
                  <p>About Us</p>
                  <p>How It Works</p>
                  <p>Safety Guidelines</p>
                  <p>Contact</p>
                </div>
              </div>
              
              <div>
                <h4>Support</h4>
                <div className="link-list">
                  <p>Help Center</p>
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                  <p>Community Guidelines</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 MediSwap. All rights reserved. Built with care for community health.</p>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;