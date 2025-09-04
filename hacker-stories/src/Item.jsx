import React from "react";

//Nested Destructuring
const Item = ({ item: { title, url, author, num_comments, points } }) => {
  return (
    <li key={item.objectID}>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </li>
  );
};

export default Item;
