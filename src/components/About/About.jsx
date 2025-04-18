import "./About.css";
import myImage from "../../images/andy.jpg";
function About() {
  return (
    <section className="about">
      <img src={myImage} alt="Picture of me" className="about__image" />
      <div className="about__container">
        <h3 className="about__author">About the author</h3>
        <p className="about__description">
          Hello my name is Anderson Alroy Conner IV, I am the author of this
          NewsExplorer app. Currently I am enrolled in the Software Engineering
          program at TripleTen. Technologies I currently know are JavaScript,
          HTML, CSS, ReactJS, MongoDB, Postman, and node.js.
        </p>
      </div>
    </section>
  );
}

export default About;
