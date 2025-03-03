import React from 'react';
import { FaSearch } from 'react-icons/fa';
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon"/>
      <input type='text' placeholder='Search' id="search-input"/>
    </div>
  )
}

export default SearchBar
