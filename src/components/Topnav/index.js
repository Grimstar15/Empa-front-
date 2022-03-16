import React from "react";
import style from "./topnav.module.scss";
import Dropdown from "../Dropdown";

import { Link } from "react-router-dom";

import notifications from "../../assets/JsonData/notification.json";

import user_image from "../../assets/images/value3.png";

import user_menu from "../../assets/JsonData/user_menus.json";

const curr_user = {
  display_name: "User",
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className={style.topnav__right_user}>
    <div className={style.topnav__right_user__image}>
      <img src={user.image} alt="" />
    </div>
    <div className={style.topnav__right_user__name}>{user.display_name}</div>
  </div>
);

const renderNotificationItem = (item, index) => (
  <div className={style.notification_item} key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserMenu = (item, index) => (
  <button
    key={index}
    onClick={() => {
      localStorage.removeItem("token");
      window.location = "/";
    }}
  >
    <div className={style.notification_item}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </button>
);
const Topnav = () => {
  return (
    <div className={style.topnav}>
      <div className={style.topnav__search}>
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className={style.topnav__right}>
        <div className={style.topnav__right_item}>
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className={style.topnav__right_item}>
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className={style.topnav__right_item}>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
