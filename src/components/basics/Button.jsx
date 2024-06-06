import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <div className="w-full max-w-md mt-3">
      <button
        type="button" // Alterei para "button" pois o tipo "submit" é geralmente usado em formulários
        className="w-full mt-6 h-14 rounded-3xl focus:outline-none bg-light-buttonBg text-light-buttonText dark:bg-dark-buttonBg dark:text-dark-buttonText"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
