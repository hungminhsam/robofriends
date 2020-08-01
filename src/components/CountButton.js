import React, { useState } from "react";

const CountButton = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount((count) => count + 1);
  };

  return <button onClick={onClick}>Click count : {count} </button>;
};

export default CountButton;
