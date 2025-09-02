import "../App.css";
import React, { useState } from 'react';
import { UsersIcon } from '../Icons';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // For redirecting after login/signup

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your login/signup logic here
    // For example, call your AWS Lambda signup/login API
    console.log("Form submitted");

    // Redirect to Home or Upload page after login/signup
    navigate('/');
  };

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

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}
            
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  className="form-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            )}
            
            <button type="submit" className="btn-primary full-width">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="auth-toggle">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-link"
              type="button"
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
