import NewsCard from "../NewsCard/NewsCard";
import { mockNewsData } from "../../utils/mockData";
import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  return (
    <div className="saved-news-page">
      <section className="saved-news">
        <p className="saved-news__text">Saved Articles</p>
        <h2 className="saved-news__title">User, you have 5 saved articles</h2>
        <p className="saved-news__keywords">
          By keywords:{" "}
          <span className="saved-news__keywords_type_bold">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </section>
      <section className="saved-news-cards">
        <NewsCardList articles={mockNewsData} />
      </section>
    </div>
  );
}

export default SavedNews;
