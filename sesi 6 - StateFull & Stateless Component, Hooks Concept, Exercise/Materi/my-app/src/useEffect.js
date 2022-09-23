import React, { useEffect, useState } from "react";

function Example() {
  const [count, setcount] = useState(0);

  // Mirip dengan componentDidMount dan componentDidUpdate
  useEffect(() => {
    // Memperbarui judul dokumen menggunakan API browser
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setcount(count + 1)}> Click Me</button>
    </div>
  );
}

export default Example;
