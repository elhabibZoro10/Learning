import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import Search from "./Search";

const title = "React";
function getTitle(title) {
  return title;
}

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
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>

      <Search />
      <hr />
      <List />

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
