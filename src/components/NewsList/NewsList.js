import React from "react";

import Button from "../UI/Button/Button";

import classes from "./NewsList.module.scss";

const NewsList = (props) => {
  let items = [];
  if (props.news.length > 0) {
    props.news.forEach((item, index) => {
      items.push(
        <div key={index} className={classes.News}>
          <img
            className={classes.ContentItem_Image}
            src={item.imgurl}
            alt={item.title}
          />
          <h2>{item.title}</h2>

          <p>{item.brief}</p>
          {/* <Button link={`/newsView/${item.id}`}>Дэлгэрэнгүй</Button> */}
          <Button
            link={` http://beta.empasoft.mn:5000/newsView/${item.id}/content`}
          >
            Дэлгэрэнгүй
          </Button>
        </div>
      );
    });
  }
  return <div className={classes.NewsList}>{items}</div>;
};

export default NewsList;
