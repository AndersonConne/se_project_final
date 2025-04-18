import { useLocation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
function NewsCardList({
  isLoggedIn,
  searchResults,
  visibleCards,
  savedArticles,
  handleSavedArticles,
  handleDeleteArticle,
}) {
  const location = useLocation();
  const getSourceName = (item) => {
    console.log("Article being saved:", {
      title: item.title,
      source: item.source,
    });
    if (!item.source) return "Unknown Source";
    if (typeof item.source === "object" && item.source.name)
      return item.source.name;
    if (typeof item.source === "string") return item.source;
    return "Unknown Source";
  };

  return (
    <ul className="news-card__list">
      {location.pathname === "/saved-news"
        ? (savedArticles || []).map((item) => (
            <NewsCard
              key={item.urlToImage}
              title={item.title}
              text={item.description}
              date={item.publishedAt}
              source={getSourceName(item)}
              link={item.url}
              image={item.urlToImage}
              isLoggedIn={isLoggedIn}
              handleDeleteArticle={handleDeleteArticle}
              savedArticles={savedArticles}
            />
          ))
        : searchResults
            .slice(0, visibleCards)
            .map((item) => (
              <NewsCard
                key={item.urlToImage}
                title={item.title}
                text={item.description}
                date={item.publishedAt}
                source={getSourceName(item)}
                link={item.url}
                image={item.urlToImage}
                isLoggedIn={isLoggedIn}
                handleSavedArticles={handleSavedArticles}
                savedArticles={savedArticles}
              />
            ))}
    </ul>
  );
}
export default NewsCardList;
