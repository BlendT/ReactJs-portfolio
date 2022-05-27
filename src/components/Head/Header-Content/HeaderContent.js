import Button from "../../../UI/Button/Button";
import classes from "./HeaderContent.module.css";
import { GoChevronDown } from "react-icons/go";
import ScrollContext from "../../../store/ScrollContext";
import { useContext } from "react";

const HeaderContent = () => {
  const { scrollToBottom } = useContext(ScrollContext);

  return (
    <div className={classes["content-container"]}>
      <h3>Welcome to my website</h3>
      <h1>
        <span>I'am </span>
        <span>
          <b>Blend Tahiri </b>
          {/* <b>Web Developer</b> */}
        </span>
      </h1>
      <div className={classes.btn}>
        <Button className={classes["btn-1"]}>View Work</Button>
        <Button className={classes["btn-2"]}>Hire me</Button>
      </div>
      <div className={classes.narrow}>
        <GoChevronDown
          size={30}
          color="white"
          onMouseOver={({ target }) => {
            target.style.background = "";
            target.style.borderRadius = "25px";
            target.style.cursor = "pointer";
          }}
          onMouseOut={({ target }) => {
            target.style.background = "rgba(255, 255, 255, 0.5)";
           
          }}
          onClick={scrollToBottom}
        />
      </div>
    </div>
  );
};

export default HeaderContent;
