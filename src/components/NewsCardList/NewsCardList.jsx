import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";
function NewsCardList({ articles }) {
  return (
    <ul className="news-card__list">
      {articles.map((item) => (
        <NewsCard key={item.title} {...item} />
      ))}
    </ul>
  );
}

export default NewsCardList;
