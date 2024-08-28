import React, { useEffect, useState } from 'react';
import './myTrips.css';

const MyTrips = () => {
  const [bookedTrips, setBookedTrips] = useState([]);

  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem('bookedTrips')) || [];
    setBookedTrips(trips);
  }, []);

  const handleCancelTrip = (id) => {
    const updatedTrips = bookedTrips.filter(trip => trip.id !== id);
    setBookedTrips(updatedTrips);
    localStorage.setItem('bookedTrips', JSON.stringify(updatedTrips));
  };

  return (
    <div className="my-trips-container">
      <h2>My Trips</h2>
      <div className="trips-list">
        {bookedTrips.length > 0 ? (
          bookedTrips.map(trip => (
            <div key={trip.id} className="trip-card">
              <img src={trip.image} alt={trip.name} />
              <h3>{trip.name}</h3>
              <p><strong>Location:</strong> {trip.location}</p>
              <p><strong>Start Date:</strong> {trip.startDate}</p>
              <p><strong>Start Time:</strong> {trip.startTime}</p>
              <p><strong>Number of Persons:</strong> {trip.numPersons}</p>
              <p><strong>Total Price:</strong> ₹{trip.totalPrice}</p>
              <button onClick={() => handleCancelTrip(trip.id)} className="btn btn-danger">Cancel</button>
            </div>
          ))
        ) : (
          <p>No trips booked yet.</p> 
        )}
      </div>
    </div>
  );
};

export default MyTrips;
