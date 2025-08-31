import React from "react";

const Search = () => {
  const handelChange = (e) => {
    console.log(e.target.value);
  };

  const handleClick = () => {
    console.log("Button click ...");
  };

  const [count, setCount] = React.useState(0);

  function handlClick() {
    setCount(count + 1);
  }

  const [text, setText] = React.useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
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
    </div>
  );
};

export default Search;
