import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <label>
        <strong>Genres:</strong>
        <select onChange={(e)=>props.filterRestaurants(e.target.value)}>
          <option value="Steak">Steak</option>
          <option value="American">American</option>
          <option value="Seafood">Seafood</option>
          <option value="Contemporary">Contemporary</option>
        </select>
      </label>
      <label>
        <strong>States:</strong>
        <select onChange={(e)=>props.filterRestaurants(e.target.value)}>
          <option value="CO">CO</option>
          <option value="TX">TX</option>
          <option value="LA">LA</option>
          <option value="CA">CA</option>
        </select>
      </label>
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search Restaurants"}
        onChange={props.updateSearchTerm}
        value={props.searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
    </div>
  )
}

export default SearchBar
