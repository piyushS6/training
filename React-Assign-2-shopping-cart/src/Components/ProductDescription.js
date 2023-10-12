import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./Products.scss";
export default function ProductDescription({ prod }) {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  // console.log(props.product);

  return (
    <div className="popup-card" key={prod.id}>
      <img src={prod.images[0]} alt={prod.id} />
      <h3 style={{ color: theme.descTitle }}>Name: {prod.title}</h3>
      <p>Description: {prod.description}</p>
      <p>Price: Rs. {prod.price}</p>
      <p>Discount: {prod.discountPercentage}%</p>
      <p>Rating: {prod.rating}</p>
      <p>Brand: {prod.brand}</p>
    </div>
  );
}
