import "./NewsCard.css";

import bookmark from "../../images/bookmark.svg";

function NewsCard({ title, text, date, source, link, image, keyword }) {
  return (
    <li className="news-card">
      <a href={link} className="news-card__link">
        <img src={image} alt={title} className="news-card__image" />
        <div className="news-card__content">
          <div className="news-card__main">
            <p className="news-card__date">{date}</p>
            <h3 className="news-card__title">{title}</h3>
            <p className="news-card__description">{text}</p>
          </div>
          <p className="news-card__source">{source}</p>
        </div>
      </a>
      <button className="news-card__save-btn">
        <img src={bookmark} alt="save icon" className="news-card__save-img" />
      </button>
    </li>
  );
}

export default NewsCard;
