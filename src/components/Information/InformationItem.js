import React from 'react';
import './Information.css';

function InformationItem({ text, details, image }) {
  return (
    <div className="InformationItem">
      <h3>{image}</h3>
      <h2>{text}</h2>
      <h3>{details}</h3>
    </div>
  );
}

export default InformationItem;