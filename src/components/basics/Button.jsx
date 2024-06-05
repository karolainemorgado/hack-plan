import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 ${className}`}
  >
    {children}
  </button>
);

export default Button;
