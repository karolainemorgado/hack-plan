// src/components/Input.js
import React from 'react';

const Input = ({ type = 'text', placeholder = '', value, onChange, className = '' }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);

export default Input;
