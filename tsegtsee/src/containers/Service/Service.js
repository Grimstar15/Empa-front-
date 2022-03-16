import React, { Component } from "react";

import axios from "../../axios-connect";
import Header from "../../components/Header/Header";
import ServiceList from "../../components/ServiceList/ServiceList";
import Form from "../../components/Form/Form";

import classes from "./Service.module.scss";

class Service extends Component {
  state = {
    activeIndex: 0,
    services: [
      {
        id: 1,
        title: "мэдээллийн аюулгүй байдал ",
        icon: "https://github.com/GrimStarr/EImages/blob/main/images/icon_kidsvalue4.png?raw=true",
        body: "this is body texy",
      },
      {
        id: 2,
        title: "Дижитал оффис",
        icon: "https://github.com/GrimStarr/EImages/blob/main/images/icon_kidsvalue3.png?raw=true",
        body: "this is body texy",
      },
      {
        id: 3,
        title: "гэрээс ажиллах",
        icon: "https://github.com/GrimStarr/EImages/blob/main/images/icon_kidsvalue1.png?raw=true",
        body: "this is body texy",
      },
    ],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("/service")
      .then((response) => {
        console.log(response.data);
        this.setState({
          isLoaded: true,
          services: [...response.data],
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: false,
          error: error.message,
        });
      });
  }

  onClickHandler = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

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

    let content = null;
    if (
      //this.state.isLoaded
      true
    ) {
      content = (
        <ServiceList
          services={this.state.services}
          activeIndex={this.state.activeIndex}
          onClick={(index) => this.onClickHandler(index)}
        />
      );
    }

    return (
      <div className={classes.Service}>
        <Header isHome={false} title={"Үйлчилгээ"} bgColor="service" />
        {content}
        <Form title={formData.title} inputs={formData.inputs} />
      </div>
    );
  }
}

export default Service;
