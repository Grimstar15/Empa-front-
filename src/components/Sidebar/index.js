import React, { useEffect, useState } from "react";
import style from "./sidebar.module.scss";

import { Link } from "react-router-dom";

import logo from "../../assets/images/empa_logo.png";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const SidebarItem = (props) => {
  return (
    <div className={style.sidebar__item}>
      <div
        className={`${style.sidebar__item_inner} ${
          props.active ? style.active : ""
        }`}
      >
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  // useEffect(() => {});
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  console.log(activeItem);
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__logo}>
        <img src={logo} alt="logo" />
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
