import React from "react" 
export default function Button({onClick, label, isDarkMode}) {
  return (

    <div className="w-full max-w-md mt-3"> 
    {isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} 
      <button
        type="submit"
        className="w-full mt-6 h-14 
        rounded-3xl bg-black focus:outline-none text-white"
        onClick={onClick}
      >
{label}      
 
</button>
</div>
  )
}