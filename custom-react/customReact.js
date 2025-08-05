// we are attempting to build our own version of reactJS. We will see how React interprets the elements that are inside a functional component. This is how react as a library renders every element in an object-like tree structure.

function customRender(reactElement, container) {
  // Although this is fine, we know that if there were 100 attributes, the code will be unmaintainable.
  /*  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
*/

  // version 2 of the code eliminates the problem of version 1
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// ReactJs tries to see everything as a tree. It can be a simple structure or a complex tree structure
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
