import React from "react";
import style from "./style.module.scss";

const StatusCard = (props) => {
  return (
    <div className={style.status_card}>
      <div className={style.status_card__icon}>
        <i className={props.icon}></i>
      </div>
      <div className={style.status_card__info}>
        <h4>{props.count}</h4>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default StatusCard;
