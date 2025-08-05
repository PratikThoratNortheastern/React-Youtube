import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  const username = "react-interview";
  return (
    <div>
      <h1>Custom Application</h1>
      {/* This username variable below is called evaluated expression
          We only write the final output of outcome in this {} and not the expression itself
           */}
      <p>{username}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MyApp />
    {/*
      Since App and MyApp are nothing but functions we can also invoke them as normal functions
      App();
      MyApp();
      Because react is nothing but fancy javascript. (That is what I like to call it)
    */}
  </StrictMode>
);
