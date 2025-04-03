import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ image, text, className, imageClassName }) => {
  const defaultImage = 'path/to/defaul'; // Provide a default image path
  const defaultText = 'Default Text'; // Provide default text

  return (
    <div className={`card ${className}`}>
      <img src={image || defaultImage} alt="Card image" className={`card-image ${imageClassName}`} />
      <div className="card-text">{text || defaultText}</div>
    </div>
  );
};

export default Card;
