import React from "react";

const Button1 = ({ children, disabled, onClick4 }) => {
  return (
    <div>
      {" "}
      <button onClick={onClick4} disabled={disabled} type="button">
        {children}
      </button>
    </div>
  );
};

export default Button1;
