
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./packagebooked.css"; 

const PackageBooked = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/Packages'); 
  };

  return (
    <div className="package-booked-container"> 
      <h2>Your Tour Has Been Booked Successfully!</h2>
      <button className="btn btn-primary" onClick={handleExploreClick}>Explore</button>
    </div>
  );
};

export default PackageBooked;
