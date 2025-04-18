import { useState, useContext } from "react";
import "./SearchForm.css";
import { SearchContext } from "../../Context/SearchContext";
function SearchForm({ onSubmit, error }) {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [validationError, setValidationError] = useState("");

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length === 0) {
      setValidationError("Please enter a keyword");
    } else if (newValue.length > 40) {
      setValidationError("Search query cannot exceed 40 characters");
    } else {
      setValidationError("");
    }
    setSearchQuery(newValue);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter topic"
        className="search-form__input"
        required
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <span className="search-form__error">{validationError || error}</span>
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
