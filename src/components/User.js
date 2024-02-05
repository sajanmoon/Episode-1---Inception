import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        INCR
      </button>
      <h1>Name:{name}</h1>
      <h2>Loacation: Nagpur</h2>
      <h3>Contact @xyz.com</h3>
    </div>
  );
};
export default User;
