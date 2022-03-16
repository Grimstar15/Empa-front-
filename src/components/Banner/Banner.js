import React, { Component } from "react";
import Slider from "react-animated-slider";
import axios from "../../axios-connect";

import Button from "../UI/Button/Button";

import "react-animated-slider/build/horizontal.css";
import classes from "./Banner.module.scss";
import { Container } from "react-bootstrap";

class Banner extends Component {
  state = {
    isLoaded: false,
    banners: [
      // {
      //   id: 1,
      //   title: "banner title",
      //   body: "body of text banner ",
      //   imgurl:
      //     "https://github.com/GrimStarr/EImages/blob/main/images/banner1.jpg?raw=true",
      //   link: "http://empasoft.mn/",
      // },
      // {
      //   id: 2,
      //   title: "banner title 2",
      //   body: "Second banner  ",
      //   imgurl:
      //     "https://github.com/GrimStarr/EImages/blob/main/images/OIP.jpg?raw=true",
      //   link: "http://empasoft.mn/",
      // },
      // {
      //   id: 2,
      //   title: "banner title 3",
      //   body: "Third banner  ",
      //   imgurl:
      //     "https://github.com/GrimStarr/EImages/blob/main/images/banner1.jpg?raw=true",
      //   link: "http://empasoft.mn/",
      // },
    ],
    error: "",
  };

  componentDidMount() {
    this.loadBanners();
  }

  loadBanners = () => {
    axios
      .get("/banner")
      .then((response) => {
        response.data.map((item) =>
          item.page === this.props.page
            ? this.setState({
                isLoaded: true,
                banners: [...this.state.banners, item],
              })
            : ""
        );
      })
      .catch((error) => {
        this.setState({
          isLoaded: false,
          error: error.message,
        });
      });
  };

  render() {
    let bannerBody = null;
    if (this.state.banners.length > 0) {
      bannerBody = (
        <Slider
          autoplay={3500}
          // previousButton={null}
          // nextButton={null}
          className={classes.Container}
        >
          {this.state.banners.map((item, index) => (
            <div
              key={index}
              style={{
                marginTop: "7rem",
                background: `url('${item.imgurl}') center top`,
                width: "100%",
                height: "100%",
                backgroundRepeat: " no-repeat",
                position: "responsive",
              }}
            >
              <div className={classes.center}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                {item.link === "undefined" ? (
                  ""
                ) : (
                  <Button link={item.link} state="banner">
                    Дэлгэрэнгүй
                  </Button>
                )}
              </div>
            </div>
          ))}
        </Slider>
      );
    } else if (this.state.error !== "") {
      bannerBody = (
        <div className={classes.center}>
          <p>{this.state.error}</p>
        </div>
      );
    }

    return bannerBody;
  }
}

export default Banner;
