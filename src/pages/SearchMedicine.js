import "../App.css";
import React, { useState } from 'react';
import { SearchIcon, MapPinIcon, UsersIcon, StarIcon } from '../Icons';
import axios from 'axios';

function SearchMedicine() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    radius: 'Within 5 km'
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://your-api-gateway-url/searchMedicine', {
        params: {
          name: formData.name,
          location: formData.location,
          radius: formData.radius
        }
      });

      // Assuming API returns an array of medicines
      setSearchResults(response.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching medicines. Try again.");
    }
  };

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
          <form className="search-form" onSubmit={handleSearch}>
            <div className="form-group">
              <label>Medicine Name</label>
              <input 
                type="text" 
                name="name"
                className="form-input"
                placeholder="Search medicine..."
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Location</label>
              <input 
                type="text" 
                name="location"
                className="form-input"
                placeholder="Your location..."
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Radius</label>
              <select 
                name="radius" 
                className="form-input"
                value={formData.radius}
                onChange={handleChange}
              >
                <option>Within 5 km</option>
                <option>Within 10 km</option>
                <option>Within 25 km</option>
              </select>
            </div>

            <button type="submit" className="btn-primary search-btn">
              <SearchIcon />
              <span>Search Medicines</span>
            </button>
          </form>
        </div>

        <div className="search-results">
          <h3>Available Medicines</h3>
          {searchResults.length === 0 && <p>No medicines found.</p>}
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
