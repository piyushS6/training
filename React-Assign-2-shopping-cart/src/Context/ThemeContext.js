import React, { Component, createContext } from "react";
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      text: "#555",
      ui: "#fff",
      bg: "#eee",
      card: "#F8F0E5",
      cart: "#F8F0E5",
      desc: "#FDF0F0",
      descTitle: "#CD5C08"
    },
    dark: {
      text: "#000",
      ui: "#333",
      bg: "#555",
      card: "#FFF",
      cart: "#FFF",
      desc: "#DFCCFB",
      
    }
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;
