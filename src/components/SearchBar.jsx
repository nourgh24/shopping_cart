import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search">
      <input
        type="text"
        id="search"
        placeholder=" "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <label htmlFor="search"> Search...</label>
    </div>
  );
};

export default SearchBar;
