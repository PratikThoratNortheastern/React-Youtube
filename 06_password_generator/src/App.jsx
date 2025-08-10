import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hey there</h1>
      <p>Let's build a password generator</p>
    </>
  );
}

export default App;
