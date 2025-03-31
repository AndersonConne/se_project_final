import "./About.css";
import myImage from "../../images/andy.jpg";
function About() {
  return (
    <section className="about">
      <img src={myImage} alt="Picture of me" className="about__image" />
      <div className="about__container">
        <h3 className="about__author">About the author</h3>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
