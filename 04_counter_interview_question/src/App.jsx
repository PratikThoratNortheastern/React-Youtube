import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 20) return setCount(count + 1);
    {
      /**
      If I were to execute my code with these lines, my output will not increment by 4 but it will
      only increment by 1. The reason being useState will send updates in batches. That is more or less what react fibre architecture does tbh.

      However, setCount is a method which will set the state of the counter. and this setState method also
      provides us with a callback function. So when we execute a callback, the value is updated immedietely after the call back is run. This is how the concept works. Hence if we replace setCount(count + 1); with
      setCount(prevCount=> prevCount + 1); we are requesting the previous state here. and the current state gets updates with the previous state. But for the love of god do not do this.



      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);

      This concept is called state as a snapshot.  When we write setCounter(counter+1) multiple times it is updated only once because in the onclick handler of that render, even after calling setCounter(counter + 1) multiple times the value of the counter is 15, because after our event handler finishes, then React re-renders the component. They explained very well in their docs.
      */
    }
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
