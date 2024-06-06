import React from 'react';

const Card = ({ children, isDarkMode }) => {
  return (
    <div className={`p-4 rounded shadow 
      ${isDarkMode ? 'bg-slate-700 text-dark-text' : 'bg-light-background text-light-text'}`}>
      {children}
    </div>
  );
};

export default Card;