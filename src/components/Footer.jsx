import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#8eb486] text-white py-15 px-4 md:px-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Logo Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-black">EcoSearch</h2>
        </div>

        {/* Copyright Section */}
        <p className="text-lg text-center md:text-left">© 2025 EcoSearch</p>
      </div>
    </footer>
  );
};

export default Footer;