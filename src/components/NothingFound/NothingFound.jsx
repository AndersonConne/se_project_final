import "./NothingFound.css";
import notFoundImg from "../../images/not-found_v1.svg";
function NothingFound() {
  return (
    <div className="nothing-found">
      <img
        src={notFoundImg}
        alt="Not Found Image"
        className="nothing-found__image"
      ></img>
      <h4 className="nothing-found__title">Nothing Found</h4>
      <p className="nothing-found__description">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;
