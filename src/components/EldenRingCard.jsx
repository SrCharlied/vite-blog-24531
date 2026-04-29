import React from 'react';
import './EldenRingCard.css';

const EldenRingCard = ({ item, type }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{item.name}</h3>
          {item.image && (
            <div className="card-image-container">
              <img src={item.image} alt={item.name} className="card-image" />
            </div>
          )}
        </div>
        <div className="card-details">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EldenRingCard;