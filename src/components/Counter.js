import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        incre
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        decr
      </button>
    </div>
  );
};
export default Counter;
