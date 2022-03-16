import React from "react";
import { useHistory } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

import classes from "./Button.module.scss";

const button = (props) => {
  const LinkRoute = () => {
    let path = props.link;
    let history = useHistory();
    history.push(path);
  };
  let color =
    props.color === "white"
      ? `${classes.Button} ${classes.ButtonWhite}`
      : classes.Button;
  return (
    // <NavLink
    //     // className={color}
    //     to={props.link}
    //     exact={props.exact}
    //     activeClassName={classes.active}
    // >
    //     <span>{props.children}</span>
    // </NavLink>

    <button className={color} onClick={LinkRoute}>
      <span>{props.children}</span>
    </button>
  );
};

export default button;
