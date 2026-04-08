// Props example
// We can set default values incase we do not want to pass a certain prop.

export const ProductDetails = ({
  title,
  description,
  inStock = false,
  price,
}) => {
  return (
    <>
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      <p>In Stock: {inStock ? "Yes" : "No"}</p>
      <p>price: {price}</p>
    </>
  );
};
