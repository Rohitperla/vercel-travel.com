import React, { useState, useEffect } from 'react';
import './packages.css';
import AllPackages from './AllPackages';
import Loader from '../../common/loading';  

const Packages = () => { 
  const [searchData, setSearchData] = useState({ 
    destination: '',
  });

  const [filteredDestinations, setFilteredDestinations] = useState(''); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { 
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []); 

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
      {loading ? (
        <Loader /> 
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Packages;
