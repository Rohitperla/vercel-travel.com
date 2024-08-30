import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './allPackages.css';
import { FaArrowRight, FaClock, FaMapMarkerAlt } from 'react-icons/fa';  
import { MdPeople } from 'react-icons/md';   

const AllPackages = ({ searchQuery }) => { 
  const [allTours, setAllTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [itemsPerPage] = useState(6); 

  const fetchTours = async () => {
    try {
      const response = await axios.get('https://travel-com-lk3o.onrender.com/Tours');
      const data = response.data;  
      setAllTours(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const filteredIndianTours = allTours.filter(pkg =>
    pkg.type === 'Indian' && pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInternationalTours = allTours.filter(pkg =>
    pkg.type === 'International' && pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastIndianTour = currentPage * itemsPerPage;
  const indexOfFirstIndianTour = indexOfLastIndianTour - itemsPerPage;
  const currentIndianTours = filteredIndianTours.slice(indexOfFirstIndianTour, indexOfLastIndianTour);

  const indexOfLastInternationalTour = currentPage * itemsPerPage;
  const indexOfFirstInternationalTour = indexOfLastInternationalTour - itemsPerPage;
  const currentInternationalTours = filteredInternationalTours.slice(indexOfFirstInternationalTour, indexOfLastInternationalTour);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(Math.max(filteredIndianTours.length, filteredInternationalTours.length) / itemsPerPage);

  return (
    <div className="packages-container">
      <h2>Indian Tours</h2>
      <div className="packages-grid">
        {currentIndianTours.length > 0 ? (
          currentIndianTours.map(pkg => (
            <div className="package-card" key={pkg.id}> 
              <div className="card-img"> 
                <Link 
                  to={{ pathname: `/packages/${pkg.id}`, state: { searchData: searchQuery } }} // Pass searchQuery instead of searchData
                >
                  <img src={pkg.image} alt={pkg.name} />
                </Link>
                <div className="card-price">
                  ₹{pkg.price}
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{pkg.name}</h5>
                <div className="card-location">
                  <FaMapMarkerAlt className="card-icon" />
                  <span>{pkg.location}</span>
                </div> 
                <div className="card-description">
                  <p>{pkg.description}</p> 
                </div>
                <div className="card-details">
                  <div className="card-info-item">
                    <FaClock className="card-icon" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="card-info-item">
                    <MdPeople className="card-icon" />
                    <span>{pkg.people}/10</span>
                  </div>
                  <Link 
                    to={{ pathname: `/packages/${pkg.id}`, state: { searchData: searchQuery } }} // Pass searchQuery instead of searchData
                    className="arrow-icon"
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Indian tours found for this destination.</p>
        )}
      </div>

      <h2>International Tours</h2>
      <div className="packages-grid">
        {currentInternationalTours.length > 0 ? (
          currentInternationalTours.map(pkg => (
            <div className="package-card" key={pkg.id}>
              <div className="card-img">
                <Link 
                  to={{ pathname: `/packages/${pkg.id}`, state: { searchData: searchQuery } }} // Pass searchQuery instead of searchData
                >
                  <img src={pkg.image} alt={pkg.name} />
                </Link>
                <div className="card-price">
                  ₹{pkg.price}
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{pkg.name}</h5>
                <div className="card-location">
                  <FaMapMarkerAlt className="card-icon" />
                  <span>{pkg.location}</span>
                </div> 
                <div className="card-description">
                  <p>{pkg.description}</p> 
                </div>
                <div className="card-details">
                  <div className="card-info-item">
                    <FaClock className="card-icon" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="card-info-item">
                    <MdPeople className="card-icon" />
                    <span>{pkg.people}/10</span>
                  </div>
                  <Link 
                    to={{ pathname: `/packages/${pkg.id}`, state: { searchData: searchQuery } }} // Pass searchQuery instead of searchData
                    className="arrow-icon"
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No International tours found for this destination.</p>
        )}
      </div>

      <div className="pagination"> 
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} 
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;  
