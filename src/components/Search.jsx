"use client"
import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ search, setSearch }) => {
  return (
    <label htmlFor="" className="input-container">
      <IoSearch className="input-container__search_icon" />
      <input
        type="search"
        placeholder="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-container__search"
      />
    </label>
  );
};

export default Search;
