// import { useState } from "react";
import "./Cart.scss";
import TotalPrice from "./TotalPrice";

export default function Cart(props) {
  // const [quantity, setQuantity] = useState(1);

  // const handleDecrement = (item) => {
  //   // return (qty -= 1);
  //   setQuantity(() => {
  //     return item.qty <= 1 ? item.qty : item.qty - 1;
  //   });
  // };

  // const handleIncrement = (item) => {
  //   // return (qty += 1);
  //   setQuantity(() => {
  //     return item.qty + 1;
  //   });
  // };

  return (
    <div className="itemList" style={props.style}>
      {props.addItem.map((item) => {
        return (
          <ul key={item.title}>
            <img src={item.images[0]} alt={item.title} />
            <div>
              <h3>{item.title} </h3>
              <p>{"Rs. " + item.price}</p>
            </div>
            <div>
              <button
                className="qty-btn"
                type="button"
                onClick={() => props.handleDecrement(item)}
              >
                -
              </button>
              {item.qty}

              <button
                className="qty-btn"
                type="button"
                onClick={() => props.handleIncrement(item)}
              >
                +
              </button>
            </div>
            <button type="button" onClick={() => props.onRemoveItem(item)}>
              Remove
            </button>
          </ul>
        );
      })}

      <TotalPrice price={props.addItem} />
    </div>
  );
}
