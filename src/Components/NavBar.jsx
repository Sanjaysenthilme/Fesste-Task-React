import React from 'react';

const Navbar = ({ searchQuery, handleSearch }) => {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">
          Logo
        </div>
         {/* Search Bar */}
         <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
    </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
