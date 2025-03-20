import React from 'react';

const Header = () => {
  return (
    <header className="top-0 z-10 bg-[#fdf7f4] bg-opacity-50 py-5 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-black">
            <span className="text-[#8eb486]">Eco</span>Search
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;