import React, { useState } from 'react';
function Cat(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Meow Meow</h1>
      <p>{props.message}</p>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
export default Cat
