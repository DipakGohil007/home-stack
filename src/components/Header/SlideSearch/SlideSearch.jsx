import React, { useState } from "react";
import "./SlideSearch.scss";
import SearchIcon from "../../../assets/svg/SearchIcon";

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInput = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`input-box ${isOpen ? "open" : ""}`}>
      <input type="text" placeholder="Search" name="Search" />
      <span className="search" onClick={toggleInput}>
        <SearchIcon />
      </span>
      <i className="uil uil-times close-icon" onClick={toggleInput}></i>
    </div>
  );
};

export default SearchInput;
