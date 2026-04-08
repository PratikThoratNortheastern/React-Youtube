import { Button } from "./Button";
import { Hello, HelloWithoutJsx } from "./Hello";
import { Welcome } from "./Welcome";
import { ProductDetails } from "./ProductDetails";

function App() {
  return (
    <div>
      <ProductDetails
        title="Laptop"
        inStock={true}
        description="This is a gaming laptop with great graphics"
        price={1299.99}
      />
      <ProductDetails
        title="Coffee"
        description="Butter Pecan Coffee"
        price={10.62}
      />
      <h1>React 19 Course!</h1>
      <Hello />
      <HelloWithoutJsx />
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
