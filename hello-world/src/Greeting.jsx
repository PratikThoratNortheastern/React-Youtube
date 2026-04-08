export const Greeting = ({ name = "John", message = "Hello" }) => {
  return (
    <>
      <p>
        {message}, {name}
      </p>
    </>
  );
};
