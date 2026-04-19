// Examples of styling React components
// inline styles are applied using a javascript objects and property names use camel case conventions

// Other ways include using CSS libraries/frameworks like tailwind or even component design systems like ShadCN
// We can use external css files as well but they will make all styles globally available to all components
// To avoid making it global just use the module keyword in the file name.
// Example, if we create an alert css file we would write it as Alert.module.css instead of Alert.css.
// We essentially create a css module by doing so
export const Alert = ({ children, type = "success" }) => {
  return (
    <div
      style={{
        backgroundColor: type === "success" ? "#10b981" : "crimson",
        color: "white",
        padding: "16px",
        margin: "16px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
};
