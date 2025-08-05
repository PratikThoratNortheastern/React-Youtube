import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 20) return setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) return setCount(count - 1);
  };

  const resetCount = () => {
    return setCount(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default App;
