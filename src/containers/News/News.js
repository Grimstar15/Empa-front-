import React, { Component } from "react";

import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";
import Form from "../../components/Form/Form";

import classes from "./News.module.scss";
import axios from "../../axios-connect";
import { API_HOST } from "../../api_utils";

class News extends Component {
  state = {
    news: [
      {
        id: 0,
        title: "Мэдээлэл технологийн мэргэших сургалтууд",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/inspire.jpg?raw=true",
        brief: "text",
      },
      {
        id: 1,
        title: "Төслийн менежмент",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/inspire.jpg?raw=true",
        brief: "text",
      },
      {
        id: 2,
        title: "Цахим ажилтан",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/inspire.jpg?raw=true",
        brief: "text",
      },
      {
        id: 3,
        title: "Шинээр мэргэшүүлэх урт хугацааны сургалт",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/inspire.jpg?raw=true",
        brief: "text",
      },
    ],
  };
  async componentDidMount() {
    axios
      .get(`${API_HOST}/news`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          news: [...response.data],
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }
  render() {
    let formData = {
      title: "Бүртгүүлэх",
      inputs: [
        {
          label: "Багцын сонголт",
        },
        {
          label: "Таны нэр",
        },
        {
          label: "Имэйл хаяг",
        },
        {
          label: "Утасны дугаар",
        },
        {
          label: "Байгууллагын нэр",
        },
        {
          label: "Имэйл хэрэглэгчийн тоо",
        },
      ],
    };

    return (
      <div className={classes.News}>
        <Header isHome={false} title={"Мэдээ"} bgColor="news" />
        <h2>Технологийн ертөнцөөр аялцгаая</h2>
        <NewsList news={this.state.news} />
        {/* <Form title={formData.title} inputs={formData.inputs} /> */}
      </div>
    );
  }
}

export default News;
