import React from 'react';

const Checkbox = ({ checked, onChange, label }) => (
  <label className="inline-flex items-center">
    <input type="checkbox" checked={checked} onChange={onChange} className="form-checkbox h-5 w-5 text-blue-500" />
    <span className="ml-2">{label}</span>
  </label>
);

export default Checkbox;
