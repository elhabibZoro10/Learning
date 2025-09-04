import React, { useState } from "react";

const Amount = ({ toCurrency }) => {
  const [amount, setAmount] = useState(0);
  const handleIncrement = () => {
    setAmount(amount + 1);
  };
  const handleDecrement = () => {
    setAmount(amount - 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <p>US Dollar: {amount} </p>
      {toCurrency(amount)}
    </div>
  );
};

export default Amount;
