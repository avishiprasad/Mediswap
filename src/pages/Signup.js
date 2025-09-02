import "../App.css";
import React, { useState } from 'react';
import { HeartIcon, UploadIcon, SearchIcon, UsersIcon } from '../Icons';


function Signup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">
              <UsersIcon />
            </div>
            <h2>{isLogin ? 'Welcome Back' : 'Join MediSwap'}</h2>
            <p>{isLogin ? 'Sign in to your account' : 'Create your account to start helping'}</p>
          </div>

          <div className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="form-input"
                placeholder="Enter your password"
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
            )}
            
            <button className="btn-primary full-width">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </div>

          <div className="auth-toggle">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-link"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
  export default Signup;