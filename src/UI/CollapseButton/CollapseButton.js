import React from "react";
import classes from "./CollapseButton.module.css";
const CollapseButton = (props) => {
  const isShown = props.isShown;
  const isScrolled = props.isScrolled;

  const cssLine1Class =
    !isShown && isScrolled ? classes["line-1-clicked"] : classes["line-1"];

  const line1 = isScrolled
    ? `${cssLine1Class} ${classes["line-1-scrolled"]}`
    : cssLine1Class;

  const cssLine3Class = !isShown
    ? classes["line-3-clicked"]
    : classes["line-3"];

  const line3 = isScrolled
    ? `${cssLine3Class} ${classes["line-3-scrolled"]}`
    : cssLine3Class;

  return (
    <div
      className={`${classes["line-container"]} ${props.className}`}
      onClick={props.onClick}
    >
      <div className={line1}></div>
      {/* <div className={classes["line-2"]}></div> */}
      <div className={line3}></div>
    </div>
  );
};

export default CollapseButton;
