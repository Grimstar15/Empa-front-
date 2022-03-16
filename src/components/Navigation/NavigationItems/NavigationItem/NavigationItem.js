import React from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.scss";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    {!props.external ? (
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    ) : (
      <a href={props.external}> {props.children}</a>
    )}
  </li>
);

export default navigationItem;
