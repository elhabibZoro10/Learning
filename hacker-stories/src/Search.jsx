import React, { useState } from "react";

const Search = () => {
  const handelChange = (e) => {
    console.log(e.target.value);
  };

  const handleClick = () => {
    console.log("Button click ...");
  };

  const [count, setCount] = useState(0);

  function handlClick() {
    setCount(count + 1);
  }

  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  //React State

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange1 = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h3>Search</h3>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handelChange} />

      <button type="button" onClick={handleClick}>
        Event Handler
      </button>

      <div>
        Count: {count}
        <button type="button" onClick={handlClick}>
          Increase Count
        </button>
      </div>

      <hr />
      <div>
        Count: {count}
        <button
          type="button"
          onClick={function () {
            setCount(count + 1);
          }}
        >
          Increase Count
        </button>
      </div>

      <hr />
      <div>
        <input type="text" value={text} onChange={handleChange} />

        {text}
      </div>

      <hr />

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange1} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};

export default Search;
