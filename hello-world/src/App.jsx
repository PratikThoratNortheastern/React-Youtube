import { Button } from "./Button";
import { Hello, HelloWithoutJsx } from "./Hello";
import { Welcome } from "./Welcome";
import { ProductDetails } from "./ProductDetails";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";

function App() {
  return (
    <div>
      <CardWrapper title={"User Profile"}>
        <p>Name: Pratik Thorat</p>
        <p>iampratikthorat@gmail.com</p>
        <p>Male</p>
      </CardWrapper>

      <Greeting />
      <Greeting name="Bruce" message="GoodMorning" />
      <Greeting message="Howdy" />
      <Greeting name="Alice" />
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
