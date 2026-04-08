import React from "react";

export const Hello = () => {
  return (
    <div id="container">
      <h1>Hello Pratik</h1>
    </div>
  );
};

export const HelloWithoutJsx = () => {
  return React.createElement(
    "div",
    { id: "container" },
    React.createElement("h1", null, "Hello Pratik"),
  );
};
