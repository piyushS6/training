import React, { Component } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import './ToggleTheme.scss'
class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}><i className="fa-solid fa-circle-half-stroke"></i> Theme</button>;
  }
}
export default ThemeToggle;
