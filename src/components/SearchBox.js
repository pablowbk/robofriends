import React from 'react';
import '../containers/App.css'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="">
      <input
        className="input"
        type="search"
        placeholder="Search robots here"
        onChange={searchChange}
        autoFocus
      />
    </div>
  )
}


export default SearchBox
