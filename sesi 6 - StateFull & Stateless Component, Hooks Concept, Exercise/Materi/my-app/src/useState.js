import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // pertama inisialisasi state  = count
  // kedua inisialisasi setState = setCount
  // useState paremeter di isi dengan nilai pertama dari state

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count - count)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Counter;
