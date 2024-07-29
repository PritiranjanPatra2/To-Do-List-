import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search Tasks"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
