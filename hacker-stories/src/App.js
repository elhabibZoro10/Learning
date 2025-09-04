import "./App.css";
import Button from "./Button";
import Button1 from "./Button1";
import List from "./List";
import Search from "./Search";
import Welcome from "./Welcome";
import React, { useState } from "react";

function getTitle(title) {
  return title;
}

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const array = [1, 4, 9, 16];
// Pass a function to map
const mapped = array.map((x) => x * 2);
console.log(mapped);

const articles = [
  { id: 1, title: "elhabib benani" },
  { id: 2, title: "omaar bennani" },
  { id: 3, title: "hermano boy" },
];

function App() {
  //React Props vs. State
  const greeting = "Welcome to React";
  const [isShow, setShow] = useState(true);
  const handleToggle = () => {
    setShow(!isShow);
  };

  const [greeting2, setGreeting2] = useState("Welcome to React");
  const handleChange2 = (e) => {
    setGreeting2(e.target.value);
  };
  const [isShow2, setShow2] = useState(true);
  const handleToggle2 = () => {
    setShow2(!isShow2);
  };

  //How to pass Props from child to parent Component
  const [greeting3, setGreeting3] = useState("Welcome to React 3");
  const [isShow3, setShow3] = useState(true);
  const handleChange3 = (e) => {
    setGreeting3(e.target.value);
  };
  const handleToggle3 = () => {
    setShow3(!isShow3);
  };

  // React Rest Props
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>

      <Search />
      <hr />
      <List list={list} />

      <hr />

      <button onClick={handleToggle}>Toggle</button>
      {isShow ? <Welcome text={greeting} /> : null}

      <button onClick={handleToggle2}>Toggle</button>
      <input type="text" value={greeting2} onChange={handleChange2} />
      {isShow2 ? <Welcome text={greeting2} /> : null}

      <Button label="Toggle" onClick={handleToggle3} />
      <input type="text" value={greeting3} onChange={handleChange3} />
      {isShow3 ? <Welcome text={greeting3} /> : null}

      <Button1 label4={count} disabled={false} onClick4={handleIncrement} />

      <hr />
      <h2>List friends</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <span>Hello : {article.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
