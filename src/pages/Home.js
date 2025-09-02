import "../App.css";
import React, { useState } from 'react';
import { HeartIcon, UploadIcon, SearchIcon, UsersIcon,MapPinIcon,ShieldIcon,ClockIcon,PillIcon } from '../Icons';


function Home({ setCurrentPage }) {
  const stats = [
    { number: '10K+', label: 'Medicines Donated', icon: HeartIcon },
    { number: '5K+', label: 'Lives Helped', icon: UsersIcon },
    { number: '50+', label: 'Cities Covered', icon: MapPinIcon }
  ];

  const features = [
    {
      icon: ShieldIcon,
      title: 'Verified & Safe',
      description: 'All medicines are verified for safety and authenticity before listing'
    },
    {
      icon: ClockIcon,
      title: 'Quick Matching',
      description: 'Find the medicines you need in your area within minutes'
    },
    {
      icon: HeartIcon,
      title: 'Community Driven',
      description: 'Join a caring community dedicated to reducing medical waste'
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <PillIcon />
              Reducing Medical Waste, One Medicine at a Time
            </div>
            
            <h1 className="hero-title">
              Share Meds,
              <span className="hero-title-highlight">
                Save Lives
              </span>
            </h1>
            
            <p className="hero-description">
              Connect with your community to donate unused medicines and find the medications you need. 
              Together, we can reduce waste and ensure everyone has access to essential healthcare.
            </p>
            
            <div className="hero-buttons">
              <button 
                onClick={() => setCurrentPage('upload')}
                className="btn-primary"
              >
                <UploadIcon />
                <span>Donate Medicine</span>
              </button>
              <button 
                onClick={() => setCurrentPage('search')}
                className="btn-secondary"
              >
                <SearchIcon />
                <span>Find Medicine</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose MediSwap?</h2>
            <p>Our platform ensures safe, efficient, and community-driven medicine sharing</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
  export default Home;