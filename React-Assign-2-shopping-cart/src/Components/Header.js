import SearchBar from "./SearchBar";
import "./Header.scss";
export default function Header() {
  return (
    <div className="header">
      <h2>Shopping cart</h2>
      <SearchBar />
    </div>
  );
}
