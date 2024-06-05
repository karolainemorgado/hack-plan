// src/components/Card.js
import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`p-4 bg-white shadow rounded ${className}`}>
    {children}
  </div>
);

export default Card;
