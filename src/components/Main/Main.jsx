import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { mockNewsData } from "../../utils/mockData";
import NewsCard from "../NewsCard/NewsCard";
function Main() {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="hero__title">What's going on in the world?</h1>
        <p className="hero__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </section>
      <section className="news">
        <h2 className="news__results">Search results</h2>
        <ul className="news-card__list">
          {mockNewsData.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
