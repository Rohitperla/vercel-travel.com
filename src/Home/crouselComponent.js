import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useNavigate } from 'react-router-dom';
import "./crouselcomponent.css";

function CustomCarousel() {
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    navigate('/packages'); 
  };

  return (
    <Carousel id="carouselExampleCaptions">
      <Carousel.Item className="active"> 
        <img
          src="https://wallpapers.com/images/hd/taj-mahal-in-india-4axuqbnq0u647e8o.jpg" 
          className="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Let us plan you a perfect India Holiday</h1>
          <button className="btn btn-primary explore-button" onClick={handleExploreClick}>
            Explore
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/858/348/52/kettuvallam-houseboat-kerala-india-wallpaper-preview.jpg"
          className="d-block w-100"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Let us plan you a perfect India Holiday</h1>
          <button className="btn btn-primary explore-button" onClick={handleExploreClick}>
            Explore
          </button>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?cs=srgb&dl=pexels-asadphoto-1450363.jpg&fm=jpg"
          className="d-block w-100"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Let us plan you a perfect India Holiday</h1> 
          <button className="btn btn-primary explore-button" onClick={handleExploreClick}>
            Explore
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://thumbs.dreamstime.com/b/golconda-fort-hyderabad-26222777.jpg"
          className="d-block w-100"
          alt="fourth slide"
        />
        <Carousel.Caption>
          <h1>Let us plan you a perfect India Holiday</h1> 
          <button className="btn btn-primary explore-button" onClick={handleExploreClick}>
            Explore
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel; 

