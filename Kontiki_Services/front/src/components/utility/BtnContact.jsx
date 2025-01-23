import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingContactIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed p-3 text-white rounded-full shadow-lg bg-amber-500 bottom-4 right-4 hover:bg-blue-600 "
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </button>
  );
};

export default FloatingContactIcon;