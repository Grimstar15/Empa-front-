import React from "react";
// import parse from 'html-react-parser';

import TrainingList from "../TrainingList/TrainingList";

import classes from "./CategoryList.module.scss";

const CategoryList = (props) => {
  let items = [];
  let content = null;
  if (props.categories.length > 0) {
    props.categories.forEach((item, index) => {
      items.push(
        <div
          key={index}
          className={classes.HeaderItem}
          onClick={() => props.onClick(index)}
        >
          <img src={item.icon} alt={item.title} />
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
          <TrainingList
            trainings={props.trainings}
            catagoryID={props.activeIndex}
          />
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

export default CategoryList;
