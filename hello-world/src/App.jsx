import { Button } from "./Button";
import { Hello, HelloWithoutJsx } from "./Hello";
import { Welcome } from "./Welcome";
import { ProductDetails } from "./ProductDetails";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./UserDetails";
function App() {
  return (
    <div>
      <CardWrapper title={"User Profile"}>
        <p>Name: Pratik Thorat</p>
        <p>iampratikthorat@gmail.com</p>
        <p>Male</p>
      </CardWrapper>
      <br />
      <br />
      <br />
      <UserDetails
        name={"Bruce Wayne"}
        isOnline={false}
        isPremium={true}
        isNewUser={false}
        role={"moderator"}
      />
      <br />
      <br />
      <br />
      <UserDetails
        name={"Clark Kent"}
        isOnline={true}
        isPremium={false}
        isNewUser={true}
        role={"vip"}
      />
      <br />
      <br />
      <br />
      <br />
      <UserDetails
        name={"Bruce Lee"}
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role={"admin"}
      />
      <br />
      <br />
      <br />
      <br />
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
