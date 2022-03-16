import React from "react";
import parse from "html-react-parser";

import classes from "./ServiceList.module.scss";
import MAB from "./Services/MAB";

const ServiceList = (props) => {
  let items = [];
  let content = null;
  let contentItem = [<MAB />];
  if (props.services.length > 0) {
    props.services.forEach((item, index) => {
      items.push(
        <div key={index} className={classes.HeaderItem}>
          <img
            src={item.icon}
            alt={item.title}
            onClick={() => props.onClick(index)}
          />
          <h3>{item.title}</h3>
          {props.activeIndex === index ? (
            <div className={classes.HeaderArrow}></div>
          ) : (
            <div></div>
          )}
        </div>
      );
    });

    content = (
      <div className={classes.ContentContainer}>
        <div className={classes.ContentItem}>
          {contentItem[props.activeIndex]}
        </div>
      </div>
    );
  }

  return (
    <div className={classes.Container}>
      <div className={classes.HeaderContainer}>{items}</div>
      {content}
    </div>
  );
};

export default ServiceList;
