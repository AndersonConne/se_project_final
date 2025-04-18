import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
function Main({
  onSubmit,
  searchResults,
  isLoading,
  isSearched,
  visibleCards,
  onShowMoreClick,
  savedArticles,
  handleSavedArticles,
  isLoggedIn,
}) {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">What's going on in the world?</h1>
          <p className="hero__description">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm onSubmit={onSubmit} />
        </div>
      </section>

      {isLoading && <Preloader />}

      {!isLoading && isSearched && searchResults.length === 0 && (
        <NothingFound />
      )}

      {!isLoading && searchResults.length > 0 && (
        <section className="news">
          <h2 className="news__results">Search results</h2>
          <NewsCardList
            searchResults={searchResults}
            visibleCards={visibleCards}
            savedArticles={savedArticles}
            handleSavedArticles={handleSavedArticles}
            isLoggedIn={isLoggedIn}
          />
          {searchResults.length > visibleCards ? (
            <button
              type="button"
              className="news__more-btn"
              onClick={onShowMoreClick}
            >
              Show more
            </button>
          ) : null}
        </section>
      )}
    </main>
  );
}

export default Main;
