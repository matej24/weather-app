import React from 'react';
import './SearchBar.css';

const searchBar = (props) => {

   return( 
    <div className="search-box">
        <input
        type="text"
        className="search-bar"
        placeholder="Search city..."
        onChange={e => props.setQuery(e.target.value)}
        value={props.query}
        onKeyPress={props.search}
        />
  </div>
  )
}

export default searchBar; 