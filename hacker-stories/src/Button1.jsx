import React from "react";

const Button1 = ({ label4, disabled, onClick4 }) => {
  return (
    <div>
      {" "}
      <button onClick={onClick4} disabled={disabled} type="button">
        {label4}
      </button>
    </div>
  );
};

export default Button1;
