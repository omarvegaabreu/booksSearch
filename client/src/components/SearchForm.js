import React from "react";

function SearchForm(props) {
  return (
    <div id="searchContainer">
      <center>
        <h3>Search books API</h3>
        <form id="bookSearch" class="col-sm-6">
          <label htmlFor="bookInput" form="bookSearch">
            Search the world's most extensive index of full-text books.
          </label>
          <input
            className="form-control required"
            type="text"
            name="bookInput"
            id="bookInput"
            form="bookSearch"
            onChange={e => props.handleChange(e)}
            placeholder="Search by Title, Author, Description, etc"
            required={true}
          />

          <button
            className="search icon"
            id="searchBtn"
            type="submit"
            onClick={e => props.handleSearchClick(e)}
          >
            <i class="fas fa-search mx-2" />
          </button>
        </form>
      </center>
    </div>
  );
}

export default SearchForm;
