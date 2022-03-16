import React from "react";
import Slider, { consts } from "react-elastic-carousel";

import Button from "../../UI/Button/Button";
import iconCapacity from "../../../assets/images/icon_capacity.png";
import iconLeftArrow from "../../../assets/images/icon_leftarrow.png";
import iconRightArrow from "../../../assets/images/icon_rightarrow.png";

import classes from "./TrainingList.module.scss";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TrainingList = (props) => {
  let items = [];
  if (props.trainings.length > 0) {
    props.trainings.forEach((item, index) => {
      if (item.category_id === props.catagoryID) {
        items.push(
          <div key={index} className={classes.ContentItem}>
            <img
              className={classes.ContentItem__Image}
              src={item.imgurl}
              alt={item.title}
            />
            <h3>{item.title}</h3>
            {/* <p>{item.brief}</p> */}
            <div className={classes.ContentItem__Numbers}>
              <div className={classes.ContentItem__Capacity}>
                {/* <img src={iconCapacity} alt="Capacity" /> */}
                {/* <span>&nbsp;{item.capacity}</span> */}
                {/* <Button link={`/page/${item.id}`} color={"white"}> */}
                <Button
                  link={`http://beta.empasoft.mn:5000/trainingView/${item.id}/content`}
                  color={"white"}
                >
                  Дэлгэрэнгүй
                </Button>
              </div>
              {/* <p>₮{(item.price).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p> */}

              {/* <p>lX</p> */}

              <p>₮{numberWithCommas(item.price)}</p>
            </div>
          </div>
        );
      }
    });
  }
  return (
    <div className={classes.Container}>
      <div className={classes.ContentContainer}>
        <div className={classes.itemEdit}>
          {/* <Slider
          pagination={false}
          itemsToShow={5}
          renderArrow={({ type, onClick }) => (
            <div
              onClick={onClick}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {type === consts.PREV ? (
                <img src={iconLeftArrow} alt="Left Arrow" />
              ) : (
                <img src={iconRightArrow} alt="Right Arrow" />
              )}
            </div>
          )}
          previousButton={
            <img
              src={iconLeftArrow}
              alt="Left Arrow"
              style={{ height: "5rem" }}
            />
          }
          nextButton={
            <img
              src={iconRightArrow}
              alt="Right Arrow"
              style={{ height: "5rem" }}
            />
          }
        >
          {items}
        </Slider> */}
          {items}
        </div>
      </div>
    </div>
  );
};

export default TrainingList;
