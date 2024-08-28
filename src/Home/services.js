import React from 'react';
import './services.css'; 

const servicesData = [
  {
    icon: '📦',
    title: 'Customized Travel Packages',
    description: 'Our travel packages are like personalized recipes, tailored just for you. Whether you crave a romantic getaway, a family adventure, or a solo expedition, we mix the perfect blend of destinations, activities, and accommodations to suit your taste.'
  },
  {
    icon: '✈️',
    title: 'Flight Bookings',
    description: 'Booking flights with us is like choosing from a menu of top airlines. We serve up the best deals and smoothest booking experience, with options to add extras like baggage and seat preferences to your order.'
  },
  {
    icon: '🏨',
    title: 'Hotel Reservations',
    description: 'Our hotel reservations are like a buffet of options, offering everything from cozy stays to luxurious resorts. We dish out competitive rates, detailed descriptions, and easy booking to ensure you find the perfect place to stay.'
  },
  {
    icon: '🛡️',
    title: 'Travel Insurance',
    description: 'Travel insurance with us is like having a safety net for your trip. We provide coverage for unexpected bumps in the road, like trip cancellations or medical emergencies, ensuring your journey is smooth and worry-free.'
  },
  {
    icon: '🗺️',
    title: 'Adventures',
    description: 'Embark on exciting adventures with us, like exploring a diverse menu of outdoor activities. From thrilling hikes and bike rides to wildlife encounters, our experienced guides spice up your travel experience with unforgettable flavors of excitement.'
  },
  {
    icon: '🍽️',
    title: 'Food & Drinks',
    description: 'Indulge in our culinary offerings, served with a side of local flavor. Our food experiences include food tours that are like tasting menus of the best local cuisines, cooking classes that add a dash of hands-on fun, and exclusive dining experiences that leave you craving for more.'
  }
];

const Services = () => {
  return (
    <div className="services-section">
      <h2>Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
