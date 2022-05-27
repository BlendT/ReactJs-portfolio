import ImageFrame from "../Image-Frame/ImageFrame";
import classes from "./About.module.css";

const About = () => {
  return (
    <main>
      <section className={classes["about-container"]}>
        <div className={classes.tittle}>
          <h2>About me</h2>
        </div>
        <ImageFrame />
      </section>
    </main>
  );
};

export default About;
