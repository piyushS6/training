import "./styles.css";
import { useState, useEffect,useRef } from "react";
import Products from "./Components/Products";
import "./Components/Header.scss";
import ThemeContextProvider, { ThemeContext } from "./Context/ThemeContext";
import ToggleTheme from "./Components/ToggleTheme";
import searchProductsList from "./Components/SearchProductsList";

export default function App() {
  const fetchData = () => {
    return fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  };

  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  // const [search, setSearch] = useState([]);

  // const filteredProducts = products.filter((product) => {
  //   if (product.title.toLowerCase().includes(search)) {
  //     return product;
  //   }
  //   return null;
  // });

  const searchProducts = (searchQuery) => {
    if (searchQuery && searchQuery.length > 0) {
      const url = "https://dummyjson.com/products/search?q=" + searchQuery;
      return fetch(url)
        .then((res) => res.json())
        .then((data) => setSearchedProducts(data.products));
    } else {
      setSearchedProducts([]);
    }
  };

  const debounceSearch = (inputFunc, delay) => {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        inputFunc.apply(context, args);
      }, delay);
    };
  };

  const debounceFunction = debounceSearch(searchProducts, 1000);

  useEffect(() => {
    fetchData();
    searchProducts();
  }, []);

  const childFunc=useRef(null);

  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return (
              <>
                <div className="header">
                  <h2>Shopping cart</h2>
                  <div className="search_bar">
                    <input
                      className="search"
                      type="text"
                      name="search"
                      placeholder="Search items"
                      onChange={(e) => {
                        debounceFunction(e.target.value.toLowerCase());
                      }}
                    />
                    <div className="searched_products">
                      {searchedProducts &&
                        searchedProducts.map((prod) => (
                          <div key={prod.id} onClick={() => childFunc.current(prod)}>{prod.title}</div>
                        ))}
                    </div>
                  </div>
                  <ToggleTheme />
                </div>

                <Products products={products} theme={theme} childFunc={childFunc}/>
              </>
            );
          }}
        </ThemeContext.Consumer>
      </ThemeContextProvider>
    </div>
  );
}
