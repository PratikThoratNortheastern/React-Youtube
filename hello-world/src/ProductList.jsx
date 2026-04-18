import { PRODUCTS } from "./Products";

export const ProductList = () => {
  return (
    <>
      <h3>My wish list</h3>
      <p>Products</p>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li
              style={{
                listStyle: "none",
                border: "2px solid white",
                borderRadius: "5px",
                backgroundColor: "black",
                color: "white",
                margin: "24px 20px",
                padding: "15px",
              }}
              key={product.id}
            >
              {product.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};
