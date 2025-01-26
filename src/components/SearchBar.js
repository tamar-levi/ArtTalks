import React from 'react';
// import './App.css'; // וודאי שהוספת את הקובץ הזה

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name or artist..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
