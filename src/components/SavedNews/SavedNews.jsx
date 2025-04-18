import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import { useContext } from "react";

function SavedNews({
  savedArticles,
  handleDeleteArticle,
  isLoggedIn,
  currentSearchKeyword,
}) {
  console.log(savedArticles);
  const currentUser = useContext(CurrentUserContext);
  const savedKeywords = savedArticles.map((article) => article.keyword);
  if (currentSearchKeyword && !savedKeywords.includes(currentSearchKeyword)) {
    savedKeywords.push(currentSearchKeyword);
  }
  const uniqueKeywords = [...new Set(savedKeywords)].filter(Boolean).join(", ");
  return (
    <div className="saved-news-page">
      <section className="saved-news">
        <p className="saved-news__text">Saved Articles</p>
        <h2 className="saved-news__title">{`${currentUser}, you have ${savedArticles.length} saved articles`}</h2>
        <p className="saved-news__keywords">
          By keywords:{" "}
          <span className="saved-news__keywords_type_bold">
            {uniqueKeywords}
          </span>
        </p>
      </section>
      <section className="saved-news-cards">
        <NewsCardList
          savedArticles={savedArticles}
          handleDeleteArticle={handleDeleteArticle}
          isLoggedIn={isLoggedIn}
          currentSearchKeyword={currentSearchKeyword}
        />
      </section>
    </div>
  );
}

export default SavedNews;
