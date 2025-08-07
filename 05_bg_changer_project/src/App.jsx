{
  /*
  The reason why we pass a callback in the onclick method instead of setColor(color) directly is because
 * the onclick method accepts a function and not a reference to the function or its return value. But rather a raw function  itself.
 *

  */
}

import { useState } from "react";
import Button from "./components/Button";
function App() {
  const [color, setColor] = useState("#FFFFFF");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl">
          <Button color={"red"} onClick={() => setColor("red")} />
          <Button color={"green"} onClick={() => setColor("green")} />
          <Button color={"blue"} onClick={() => setColor("blue")} />
          <Button color={"black"} onClick={() => setColor("black")} />
          <Button color={"indigo"} onClick={() => setColor("indigo")} />
          <Button color={"pink"} onClick={() => setColor("pink")} />
          <Button color={"purple"} onClick={() => setColor("purple")} />
        </div>
      </div>
    </div>
  );
}

export default App;
