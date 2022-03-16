import React from "react";
import parse from "html-react-parser";

import classes from "./ProductList.module.scss";
import Eset from "./Products/eset";
import Kaspersky from "./Products/kaspersky";
import DeviceLock from "./Products/DeviceLock";
import Office365 from "./Products/Office365";

const ProductList = (props) => {
  let items = [];
  let content = null;
  let contentItem = [<Kaspersky />, <DeviceLock />, <Eset />, <Office365 />];
  if (props.products.length > 0) {
    props.products.forEach((item, index) => {
      items.push(
        <div key={index} className={classes.HeaderItem}>
          <img
            src={item.logoURL}
            alt={item.title}
            onClick={() => props.onClick(index)}
          />
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

export default ProductList;
