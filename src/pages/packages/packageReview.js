import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'; 
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import "./packagereview.css"; 

const PackageReview = () => {
  const location = useLocation();
  const { packageDetails, startDate, startTime, startAMPM, numPersons, totalPrice } = location.state;
  const formattedDate = startDate ? format(new Date(startDate), 'dd/MM/yyyy') : '';
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return; 
    setIsSubmitting(true);

    const bookedTrip = {
      id: packageDetails.id,
      image: packageDetails.image,
      name: packageDetails.name,
      location: packageDetails.location,
      startDate: formattedDate,
      startTime: `${startTime} ${startAMPM}`,
      numPersons,
      totalPrice
    };

    const trips = JSON.parse(localStorage.getItem('bookedTrips')) || [];
    
    
    const isAlreadyBooked = trips.some(trip => trip.id === bookedTrip.id);

    if (!isAlreadyBooked) {
      trips.push(bookedTrip);
      localStorage.setItem('bookedTrips', JSON.stringify(trips));
    }

    
    navigate('/package-booked');  
  };

  return (
    <div className="package-review-container">
      <h2>Review Your Booking</h2>
      
      <div className="review-main">
        <div className="review-details">
          <img src={packageDetails.image} alt={packageDetails.name} className="review-image"/>
          <h3>{packageDetails.name}</h3>
          
          <div className="info-bar">
            <div className="info-item">
              <FaClock className="icon-clock" />
              <p>{packageDetails.duration}</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon-location" />
              <p>{packageDetails.location}</p>
            </div>
            <div className="info-item">
              <FaCalendarAlt className="icon-calendar" />
              <p>{formattedDate}</p>
            </div>
            <div className="info-item">
              <FaClock className="icon-time" />
              <p>{startTime} {startAMPM}</p>
            </div>
          </div>
          
          <p><strong>Description:</strong> {packageDetails.description}</p>
        </div>
        
        <div className="payment-section">
          <div className="payment-details">
            <h3>Book the Tour</h3>
            <p><strong>Total Price:</strong> ₹{totalPrice}</p> 

            <form onSubmit={handlePaymentSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method</label>
                <select id="paymentMethod" required>
                  <option value="credit">Credit Card</option>
                  <option value="debit">Debit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary paynow" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Pay Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageReview;  




