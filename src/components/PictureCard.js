import React from 'react';

function PictureCard({ picture }) {
  return (
    <div className="picture-card">
      <img src={picture.imageUrl} alt={picture.name} />
      <h2>{picture.name}</h2>
      <h3>{picture.artist}</h3>
      <p>{picture.description}</p>
    </div>
  );
}

export default PictureCard;
