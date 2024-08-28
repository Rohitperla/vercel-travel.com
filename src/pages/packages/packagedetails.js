import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import "./packagedetails.css";

const PackageDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const searchData = location.state?.searchData;
  const [packageDetails, setPackageDetails] = useState(null);
  const [numPersons, setNumPersons] = useState(searchData?.persons || 1);
  const [startDate, setStartDate] = useState(searchData?.startDate || '');
  const [startTime, setStartTime] = useState(searchData?.startTime || '08:00');
  const [startAMPM, setStartAMPM] = useState(searchData?.startAMPM || 'AM');
  const [totalPrice, setTotalPrice] = useState(0);

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(`https://travel-com-lk3o.onrender.com/Tours/${id}`);
        const data = await response.data;
        setPackageDetails(data);
        setTotalPrice(data.price * numPersons);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPackageDetails();
  }, [id, numPersons]);

  const handlePersonsChange = (e) => {
    const persons = parseInt(e.target.value, 10);
    if (persons >= 1) setNumPersons(persons);
    if (packageDetails) {
      setTotalPrice(persons * packageDetails.price);
    }
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    const timeValue = e.target.value;
    const [hours, minutes] = timeValue.split(':');
    let hours12 = parseInt(hours, 10);
    let ampm = 'AM';
    
    if (hours12 >= 12) {
      ampm = 'PM';
      if (hours12 > 12) {
        hours12 -= 12;
      }
    } else if (hours12 === 0) {
      hours12 = 12;
    }
    
    setStartTime(`${hours12.toString().padStart(2, '0')}:${minutes}`);
    setStartAMPM(ampm);
  };

  const handleAMPMChange = (e) => {
    setStartAMPM(e.target.value);
  };

  const handleBookNow = () => {
    navigate(`/packages/${id}/review`, {
      state: {
        packageDetails,
        startDate,
        startTime,
        startAMPM,
        numPersons,
        totalPrice,
      },
    });
  };

  if (!packageDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="package-details-container">
      <img src={packageDetails.image} alt={packageDetails.name} />
      <h2>{packageDetails.name}</h2>
      <p><strong>Location:</strong> {packageDetails.location}</p>
      <p>{packageDetails.description}</p>
      <p><strong>Base Price:</strong> ₹{packageDetails.price}</p>
      <p><strong>Duration:</strong> {packageDetails.duration}</p>
      {packageDetails.inclusions && packageDetails.inclusions.length > 0 && (
        <div className="inclusions">
          <h3>Included :</h3>
          <ul>
            {packageDetails.inclusions.map((inclusion, index) => (
              <li key={index}>{inclusion}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label htmlFor="startDate">Start Date: </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          min={getTodayDate()}
        />
      </div>

      <div className="time-container">
        <div>
          <label htmlFor="startTime">Start Time: </label>
          <input
         
            type="time"
            id="startTime"
            value={startTime}
            onChange={handleStartTimeChange}
          />
        </div>
        <div>
          <label htmlFor="startAMPM">AM/PM: </label>
          <select id="startAMPM" value={startAMPM} onChange={handleAMPMChange}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      <div id='numPersons'>
        <label htmlFor="numPersons">Number of Persons: </label>
        <input
          type="number"
          id="numPersons"
          value={numPersons} 
          onChange={handlePersonsChange}
          min="1"
        />
      </div>
      {packageDetails.map && (
        <div className="map-container">
          <iframe
            src={packageDetails.map}
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      )}

      <p><strong>Total Price:</strong> ₹{totalPrice}</p>
      <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button> 
    </div>
  );
};

export default PackageDetails; 

