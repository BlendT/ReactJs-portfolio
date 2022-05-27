import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link
      to="/"
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};

export default Button;
