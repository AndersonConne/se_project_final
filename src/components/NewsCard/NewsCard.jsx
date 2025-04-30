import "./NewsCard.css";

import bookmark from "../../images/bookmark.svg";
import deleteIcon from "../../images/bin.svg";
import filledBookmark from "../../images/bookmark-saved.svg";

import { useLocation } from "react-router-dom";

function NewsCard({
  title,
  text,
  date,
  source,
  link,
  image,
  keyword,
  isLoggedIn,
  handleSavedArticles,
  savedArticles = [],
  handleDeleteArticle,
}) {
  const location = useLocation();
  return (
    <li className="news-card">
      {location.pathname === "/saved-news" && keyword && (
        <span className="news-card__keyword">{keyword}</span>
      )}
      <a href={link} className="news-card__link">
        <img src={image} alt={title} className="news-card__image" />
        <div className="news-card__content">
          <div className="news-card__main">
            <p className="news-card__date">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h3 className="news-card__title">{title}</h3>
            <p className="news-card__description">{text}</p>
          </div>
          <p className="news-card__source">{source}</p>
        </div>
      </a>
      <button
        disabled={!isLoggedIn}
        className={`news-card__save-btn ${
          savedArticles.some((savedArticle) => savedArticle.title === title)
            ? "news-card__save-btn_saved"
            : ""
        }`}
        data-tooltip={
          location.pathname === "/"
            ? isLoggedIn
              ? "Save to Articles"
              : "Sign in to save articles"
            : "Remove from saved"
        }
        onClick={() => {
          console.log("Current pathname:", location.pathname);
          if (location.pathname === "/") {
            handleSavedArticles({
              title,
              description: text,
              publishedAt: date,
              urlToImage: image,
              source,
              url: link,
            });
          } else {
            console.log("Delete button clicked for article:", title);
            console.log("handleDeleteArticle function:", handleDeleteArticle);
            handleDeleteArticle(title);
          }
        }}
      >
        <img
          src={
            location.pathname === "/"
              ? savedArticles.some(
                  (savedArticle) => savedArticle.title === title
                )
                ? filledBookmark
                : bookmark
              : deleteIcon
          }
          alt="save icon"
          className="news-card__save-img"
        />
      </button>
    </li>
  );
}

export default NewsCard;
