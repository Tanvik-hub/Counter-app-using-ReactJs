import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('#282c34'); // Initial background color

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const changeColor = () => {
    const colors = ['#282c34', '#61dafb', '#ff7f50', '#7fff00', '#ff69b4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px', borderRadius: '10px', margin: '20px' }}>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Counter;
