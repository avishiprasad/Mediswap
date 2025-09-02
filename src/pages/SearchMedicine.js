import "../App.css";
import React, { useState } from 'react';
import { HeartIcon, UploadIcon, SearchIcon, UsersIcon,MapPinIcon,StarIcon } from '../Icons';


function SearchMedicine() {
  const [searchResults] = useState([
    {
      id: 1,
      name: 'Paracetamol 500mg',
      quantity: 20,
      expiry: '2025-12-15',
      distance: '0.5 km',
      donor: 'Sarah M.',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Amoxicillin 250mg',
      quantity: 15,
      expiry: '2025-08-22',
      distance: '1.2 km',
      donor: 'John D.',
      rating: 5.0
    }
  ]);

  return (
    <div className="search-page">
      <div className="search-container">
        <div className="search-header">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <h2>Find Medicine</h2>
          <p>Search for available medicines in your area</p>
        </div>

        <div className="search-form-card">
          <div className="search-form">
            <div className="form-group">
              <label>Medicine Name</label>
              <input 
                type="text" 
                className="form-input"
                placeholder="Search medicine..."
              />
            </div>
            
            <div className="form-group">
              <label>Location</label>
              <input 
                type="text" 
                className="form-input"
                placeholder="Your location..."
              />
            </div>
            
            <div className="form-group">
              <label>Radius</label>
              <select className="form-input">
                <option>Within 5 km</option>
                <option>Within 10 km</option>
                <option>Within 25 km</option>
              </select>
            </div>
          </div>
          
          <button className="btn-primary search-btn">
            <SearchIcon />
            <span>Search Medicines</span>
          </button>
        </div>

        <div className="search-results">
          <h3>Available Medicines</h3>
          {searchResults.map((medicine) => (
            <div key={medicine.id} className="medicine-card">
              <div className="medicine-info">
                <h4>{medicine.name}</h4>
                <div className="medicine-details">
                  <p>Quantity: {medicine.quantity} units</p>
                  <p>Expires: {medicine.expiry}</p>
                  <div className="medicine-meta">
                    <span>
                      <MapPinIcon />
                      {medicine.distance} away
                    </span>
                    <span>
                      <UsersIcon />
                      {medicine.donor}
                    </span>
                    <span>
                      <StarIcon />
                      {medicine.rating}
                    </span>
                  </div>
                </div>
              </div>
              <button className="btn-request">
                Request →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  export default SearchMedicine;