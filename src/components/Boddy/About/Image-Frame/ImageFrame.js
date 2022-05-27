import img from "../../../../assets/pb.jpeg";
import classes from "./ImageFrame.module.css";

const ImageFrame = () => {
  return (
    <div className={classes["img-frame"]}>
      <div className={classes["img-container"]}>
        <div className={classes["img-innerFrame"]}>
          <img src={img} alt="ProfilImage" />
        </div>
      </div>
      <div className={classes["img-content"]}>
        <span>I am Lavina</span>
        <br></br>
        <span>Lavina WEB DEVELOPER</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea
          commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default ImageFrame;
