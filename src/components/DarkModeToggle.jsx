import React from 'react';

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)} className=''>
      Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkModeToggle;

