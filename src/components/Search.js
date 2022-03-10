import React from "react";

function Search({ search, setSearch }) {

  function handleOnChange(value) {
    setSearch(value)
    console.log(search)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
