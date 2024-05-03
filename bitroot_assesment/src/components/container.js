import React, { useState } from 'react';
import '../components/container.css';

const Container = ({ imageUrl, title, subtitle, onClick }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const openPopup = () => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setPopupImage(url);
      })
      .catch(error => console.error('Error fetching image:', error));
  };

  const closePopup = () => {
    URL.revokeObjectURL(popupImage);
    setPopupImage('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
  };

  return (
    <div className="container" onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showPopup && (
        <div className="popup" onClick={openPopup}>
         <h2>Learn More</h2> 
        </div>
      )}
      {popupImage && (
        <div className="popup-image">
          <img src={'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts'
} alt="Popup" onClick={closePopup} />
        </div>
      )}
      <img src={imageUrl} alt="Container" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Container;
