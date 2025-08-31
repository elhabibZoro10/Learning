import React from "react";

const Search = () => {
  const handelChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h3>Search</h3>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handelChange} />
    </div>
  );
};

export default Search;
