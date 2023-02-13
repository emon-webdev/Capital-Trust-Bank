import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="container">
      <div className="searchbar">
        <input
          type="text"
          className={active ? "input active" : "input"}
          placeholder="Search"
        />
        <button
          className="btn"
          onClick={() => setActive(!active)}
          type="submit"
        >
          <BsSearch></BsSearch>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
