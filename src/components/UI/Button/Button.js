import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

import classes from "./Button.module.scss";

const Button = (props) => {
  const history = useHistory();
  const LinkRoute = () => {
    let path = props.link;
    // let history = useHistory();
    // console.log(path);
    // history.push(path);
    window.open(props.link, "_self");
  };
  const LinkBlank = () => {
    const win = window.open(props.link, "_self");
    win.focus();
  };
  let color =
    props.color === "white"
      ? `${classes.Button} ${classes.ButtonWhite}`
      : classes.Button;
  return (
    <div>
      {/* <NavLink
        // className={color}
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}
      >
        <span>{props.children}</span>
      </NavLink> */}

      <button
        className={color}
        onClick={props.state === "banner" ? LinkBlank : LinkRoute}
      >
        <span>{props.children}</span>
      </button>
    </div>
  );
};

export default Button;
