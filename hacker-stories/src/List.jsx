import React from "react";
import Item from "./Item";

const List = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <Item {...item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
