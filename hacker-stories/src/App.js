import logo from "./logo.svg";
import "./App.css";

const title = "React";
const welcome = {
  greeting: "Hey",
  title: "React",
};

function getTitle(title) {
  return title;
}

const array = [1, 4, 9, 16];

// Pass a function to map
const mapped = array.map((x) => x * 2);

console.log(mapped);

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

const articles = [
  { id: 1, title: "elhabib benani" },
  { id: 2, title: "omaar bennani" },
  { id: 3, title: "hermano boy" },
];

function App() {
  return (
    <div>
      <h1>{title} helloo would</h1>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <h1>Hello {getTitle("React")}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />
      <ul>
        {list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        ))}
      </ul>

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
