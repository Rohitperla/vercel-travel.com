

import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./about.css"

const About = () => {
    return (
        <div className="about-section">
            <div className="about-content">
                <h1 className="about-heading">About Incredible India</h1>
                <p className="about-text">
                    Interesting and intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity.
                     With these amazing and unique experiences, this South Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.
                     India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world.
                     While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.
                </p>
                <p className="about-text">
                    The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold, and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest.
                     Along with the best nature sightseeing tours, India offers an opportunity to visitors to have a little adventure of their own.
                     The numerous spell-binding and less-trodden trails give trekking tour opportunities in South Asia unlike any other.
                </p>
                <p className="about-text">
                    India Tours offers a chance to explore its biodiversity in the country’s many different regions...
                </p>
            </div>
            <div className="about-carousel">
                <Carousel style={{ height: '100%', width: '100%' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.tourmyindia.com/imagess/varanasi-india.webp"
                            alt="First slide"
                            style={{ height: '550px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://xorooms.com/romance/wp-content/uploads/2023/01/Gajanan_smart_couple_having_dinner_the_couple_is_realistic_the__79372257-a69b-4c50-ac21-202de852749f-1024x1024.png"
                            alt="Second slide"
                            style={{ height: '550px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.istockphoto.com/id/2135023427/photo/woman-traveler-with-backpack-enjoying-balinese-hindu-temple-entrance-female-tourist-during.webp?b=1&s=612x612&w=0&k=20&c=UgTH0NFdXobdtC5ne673HsDcZtbb8QkeznvjmC3-TT0="
                            alt="Third slide"
                            style={{ height: '550px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default About;

