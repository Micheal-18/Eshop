import React from 'react'

const Button = ({ text, bgColor, textColor, onClick }) => {
  return (
    <button
      className={`px-5 py-2 rounded-full font-medium transition duration-300 ${bgColor} ${textColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button