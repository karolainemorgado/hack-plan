import React from 'react';

const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" checked={isChecked} onChange={onChange} className="hidden" />
        <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow left-0 transition-transform duration-300 ease-in-out ${isChecked ? 'translate-x-full bg-blue-500' : ''}`}></div>
      </div>
      <div className="ml-3 text-gray-700 font-medium">Dark Mode</div>
    </label>
  );
};

export default ToggleSwitch;
