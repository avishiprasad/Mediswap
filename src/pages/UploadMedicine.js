import "../App.css";
import React, { useState } from 'react';
import { HeartIcon, UploadIcon, SearchIcon, UsersIcon,CheckCircleIcon } from '../Icons';


function UploadMedicine() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <div className="upload-card">
          <div className="upload-header">
            <div className="upload-icon">
              <UploadIcon />
            </div>
            <h2>Donate Medicine</h2>
            <p>Help others by sharing your unused medicines</p>
          </div>

          <div className="upload-form">
            <div className="form-row">
              <div className="form-group">
                <label>Medicine Name</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g., Paracetamol 500mg"
                />
              </div>
              
              <div className="form-group">
                <label>Quantity</label>
                <input 
                  type="number" 
                  className="form-input"
                  placeholder="Number of tablets/units"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input 
                  type="date" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Category</label>
                <select className="form-input">
                  <option>Pain Relief</option>
                  <option>Antibiotics</option>
                  <option>Vitamins</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea 
                className="form-input"
                rows="3"
                placeholder="Additional details about the medicine..."
              ></textarea>
            </div>

            <div className="form-group">
              <label>Upload Photo</label>
              <input 
                type="file" 
                className="form-input"
                onChange={handleFileChange}
              />
              {file && <p className="file-name">Selected file: {file.name}</p>}
            </div>
            
            <button className="btn-primary full-width">
              <CheckCircleIcon />
              <span>Donate Medicine</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UploadMedicine;