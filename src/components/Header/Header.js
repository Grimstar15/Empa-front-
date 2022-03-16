import React from "react";

import Banner from "../Banner/Banner";

import "react-animated-slider/build/horizontal.css";
import classes from "./Header.module.scss";

const bgColors = {
  about: "rgb(48, 56, 68)",
  product: "rgb(205, 153, 68)",
  service: "rgb(58, 81, 90)",
  training: "rgb(62, 93, 136)",
  kidsclub: "rgb(155, 79, 75)",
  news: "rgb(48, 56, 68)",
};

const header = (props) => {
  let content = null;

  if (props.isHome) {
    content = (
      <div className={classes.Header} style={{ height: "40rem" }}>
        <Banner page={"home"} />
      </div>
    );
  } else {
    content = (
      <div
        className={classes.Header}
        style={{ height: "30rem", backgroundColor: bgColors[props.bgColor] }}
      >
        <p>{props.title}</p>
      </div>
    );
  }

  return content;
};

export default header;
