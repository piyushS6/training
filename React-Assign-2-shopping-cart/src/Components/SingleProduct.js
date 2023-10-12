import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import "./Products.scss";

function SingleProduct({ product, changeDescription, handleClick }) {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="items" key={product.id} style={{ background: theme.card }}>
      <img
        src={product.images[0]}
        alt={product.title}
        onClick={() => changeDescription(product)}
      />

      <h3>{product.title} </h3>
      <p>{"Rs. " + product.price}</p>
      <button type="button" onClick={() => handleClick(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default SingleProduct;
