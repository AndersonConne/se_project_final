import "./SearchForm.css";
function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Enter topickey"
        className="search-form__input"
      />
      <button className="search-form__button">Search</button>
    </form>
  );
}

export default SearchForm;
