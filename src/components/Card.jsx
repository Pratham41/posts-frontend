import React, { useState } from 'react';
import '../styles/Card.css';

const Card = ({ card, onClick }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleDotClick = (index) => {
      setCurrentImageIndex(index);
    };

  return (
    <div className="card" onClick={onClick}>
      <div className="image-container">
        <img src={card.thumbnail.large} alt={card.title} />
        <div className="dots">
          <span 
            className={`dot ${currentImageIndex === 0 ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); handleDotClick(0); }}
          />
          <span 
            className={`dot ${currentImageIndex === 1 ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); handleDotClick(1); }}
          />
        </div>
      </div>
      <div className="card-content">
        <h2>{card.title}</h2>
        <p>{card.content}</p>
        <div className="card-footer">
          <span>{card.author.name}</span>
          <span>{new Date(card.date * 1000).toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
