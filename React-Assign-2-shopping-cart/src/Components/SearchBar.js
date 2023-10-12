import "./Header.scss";

export default function SearchBar() {
  return (
    <>
      <input
        className="search"
        type="text"
        name="search"
        placeholder="Search items"
      />
    </>
  );
}
