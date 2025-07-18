import React from 'react'

const Button = ({ text, bgColor, textColor }) => {
  return (
    <button
      className={`px-5 py-2 rounded-full font-medium transition duration-300 ${bgColor} ${textColor}`}
    >
      {text}
    </button>
  );
};

export default Button