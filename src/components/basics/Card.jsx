// src/components/Card.js
import React from 'react';

const Card = ({ children, isDarkMode }) => (
  <div className="p-4 bg-white shadow rounded">
    {children}
    {isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}
     
  </div>
);

export default Card;
