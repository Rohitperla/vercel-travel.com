import React, { useState } from 'react';
import './packages.css';
import AllPackages from './AllPackages'; 

const Packages = () => { 
  const [searchData, setSearchData] = useState({
    destination: '',
  });

  const [filteredDestinations, setFilteredDestinations] = useState(''); 

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleSearch = () => {
    setFilteredDestinations(searchData.destination);
    console.log('Search Data:', searchData);
  };

  return (
    <div className="packages-container">
      <h2>Search Tour Packages</h2>
      <div className="search-bar">
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={searchData.destination}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <AllPackages searchQuery={filteredDestinations} />
    </div>
  );
};

export default Packages;

