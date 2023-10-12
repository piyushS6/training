import { useState, useEffect } from "react";
import Cart from "./Cart";
import ProductDescription from "./ProductDescription";
import SingleProduct from "./SingleProduct";
// import { ThemeContext } from "../Context/ThemeContext";

import "./Products.scss";

// const products = [
//   {
//     image: "/Images/HP.jpg",
//     title: "HP",
//     price: "30,000"
//   },
//   {
//     image: "/Images/acer.jpg",
//     title: "Acer",
//     price: "40,000"
//   },
//   {
//     image: "/Images/iPhone14.jpg",
//     title: "iPhone 14",
//     price: "69900"
//   },
//   {
//     image: "/Images/samsungS23.jpg",
//     title: "Samsung S23",
//     price: "74900"
//   },
//   {
//     image: "/Images/apple-monitor.jpg",
//     title: "Apple Monitor",
//     price: "99900"
//   },
//   {
//     image: "/Images/beats.jpg",
//     title: "Beats Headphone",
//     price: "18700"
//   },
//   {
//     image: "/Images/oculus.jpg",
//     title: "Oculus",
//     price: "42000"
//   },
//   {
//     image: "/Images/sony.jpeg",
//     title: "Sony TWS",
//     price: "14900"
//   }
// ];

const Products = (props) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  const [popupDescription, setPopupDescription] = useState([]);
  const [popupToggle, setPopupToggle] = useState(false);

  const changeDescription = (prod) => {
    setPopupDescription([prod]);
    setPopupToggle(!popupToggle);
  };

  let newItem = [];

  const handleClick = (product) => {
    if (!items.includes(product)) {
      product.qty = 1;
      newItem = [...items, product];
      setItems(newItem);
    }
  };

  const onRemoveItem = (itemToRemove) => {
    newItem = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItem);
  };

  const handleIncrement = (itemToUpdate) => {
    newItem = items.filter((item) => {
      if (item.id === itemToUpdate.id) {
        item.qty += 1;
      }
      return item.qty;
    });
    setItems(newItem);
  };

  const handleDecrement = (itemToUpdate) => {
    newItem = items.filter((item) => {
      if (item.id === itemToUpdate.id) {
        item.qty -= 1;
      }
      return item.qty;
    });
    setItems(newItem);
  };

  useEffect(() =>
  {
    props.childFunc.current=changeDescription;
  },[]);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(items));
  }, [items]);


  return (
    // <ThemeContext.Consumer>
    //   {(context) => {
    //     const { isLightTheme, light, dark } = context;
    //     const theme = isLightTheme ? light : dark;
    //     return (
    <div
      className="products"
      style={{ background: props.theme.ui, color: props.theme.text }}
    >
      <div className="left-products">
        {props.products.map((product) => {
          return (
            <SingleProduct
              product={product}
              changeDescription={changeDescription}
              handleClick={handleClick}
              key={product.id}
            />
          );
        })}
      </div>

      {popupToggle && (
        <div className="popup-container" onClick={changeDescription}>
          <div
            className="popup-body"
            onClick={(e) => e.stopPropagation()}
            style={{ background: props.theme.desc }}
          >
            <div className="popup-header">
              <button onClick={changeDescription}>&times;</button>
            </div>
            <div className="popup-content">
              {popupDescription.map((prod) => {
                return <ProductDescription prod={prod} key={prod.id} />;
              })}
            </div>
          </div>
        </div>
      )}

      <div className="right-products">
        {items.length > 0 ? (
          <Cart
            style={{ background: props.theme.cart }}
            addItem={items}
            onRemoveItem={onRemoveItem}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ) : (
          <div className="empty-cart">
            <img src="Images/empty-cart-yellow.png" alt="Empty Cart" />
          </div>
        )}
      </div>
    </div>
    // );
    // }}
    // </ThemeContext.Consumer>
  );
};

export default Products;
