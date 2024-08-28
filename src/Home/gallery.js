import React from "react";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-section">
      <h2 className="gallery-heading">Traveler Photos</h2>
      <div className="gallery-container">
        <div className="grid-item item-1">
          <img src="https://c0.wallpaperflare.com/preview/960/407/672/malta-rocks-violet-sky-dwejra-bay.jpg" alt="image1" />
        </div>
        <div className="grid-item item-2">
          <img src="https://wallpapers.com/images/hd/travel-hd-2fsg31b3wqteinpa.jpg" alt="image2" />
        </div>
        <div className="grid-item item-3">
          <img src="https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?cs=srgb&dl=pexels-freestockpro-2070485.jpg&fm=jpg" alt="image3"/>

        </div>
        <div className="grid-item item-4">
          <img src="https://www.pixelstalk.net/wp-content/uploads/images6/Travel-HD-Wallpaper-Free-download.jpg" alt="image4" />
        </div>
        <div className="grid-item item-5">
          <img src="https://c0.wallpaperflare.com/preview/979/961/156/adventure-travel-hiking-mountain.jpg" alt="image5" />
        </div>
        <div className="grid-item item-6">
          <img src="https://atyabtravels.in/wp-content/uploads/2017/04/HD-wallpapers-1080p-free-download.jpg" alt="image6" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

