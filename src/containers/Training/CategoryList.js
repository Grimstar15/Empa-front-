import React, { Component } from "react";

import axios from "../../axios-connect";
import Header from "../../components/Header/Header";
import CategoryList from "../../components/Training/CategoryList/CategoryList";
import Form from "../../components/Form/Form";

import classes from "./CategoryList.module.scss";
import { API_HOST } from "../../api_utils";
import Banner from "../../components/Banner/Banner";

class Training extends Component {
  state = {
    activeIndex: 0,
    hehe: [
      {
        id: 0,
        title: "Мэдээлэл технологийн мэргэших сургалтууд",
        icon: "https://th.bing.com/th/id/OIP.UYjjVGzTCQIkgkl1UUefOQHaGe?pid=ImgDet&rs=1",
        brief: "text",
      },
      {
        id: 1,
        title: "Төслийн менежмент",
        icon: "https://th.bing.com/th/id/R.c93c7b03d7b7f638fa8d64061dfc0882?rik=g2s2a%2brWhN5jcw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_207954.png&ehk=unYxVH%2fcXUnPJBoSlEf1nNyPPVWTLvgVI%2fpUfi4nhIA%3d&risl=&pid=ImgRaw&r=0",
        brief: "text",
      },
      {
        id: 2,
        title: "Цахим ажилтан",
        icon: "https://th.bing.com/th/id/OIP.JYr3FcvDwZR4bVz8EW-pJgHaHa?pid=ImgDet&rs=1",
        brief: "text",
      },
      {
        id: 3,
        title: "Шинээр мэргэшүүлэх урт хугацааны сургалт",
        icon: "https://th.bing.com/th/id/R.611ed2f97be3c95e8593751ed4d43b55?rik=MVz%2fjZFES2U6sg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_157699.png&ehk=Welf6ISbB4nxc5Gk2zF9lKDBdgcjFL2qAjvoP3y%2baXA%3d&risl=&pid=ImgRaw&r=0",
        brief: "text",
      },
    ],
    categories: [],

    trainings: [],

    isLoaded: false,
  };

  async componentDidMount() {
    // axios
    //   .get(`${API_HOST}/training`)
    //   .then((response) => {
    //     let tmpAllTrainings = [];
    //     response.data.category.forEach((catItem, catIndex) => {
    //       let tmpTrainItems = [];
    //       response.data.training.forEach((trainItem, trainIndex) => {
    //         if (catItem.id === trainItem.category_id) {
    //           tmpTrainItems.push(trainItem);
    //         }
    //       });
    //       tmpAllTrainings[catIndex] = [...tmpTrainItems];
    //     });
    //     console.log(response);

    //     this.setState({
    //       isLoaded: true,
    //       categories: [...response.data.category],
    //       trainings: response,
    //     });
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       isLoaded: false,
    //       error: error.message,
    //     });
    //   });

    try {
      const response = await axios.get(`${API_HOST}/training`);
      const category = await axios.get(`${API_HOST}/training_category`);
      this.setState({
        categories: category.data,
      });
      this.setState({
        trainings: response.data,
      });
    } catch (error) {
      console.log("error :>>", error);
    }
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
    if (true) {
      content = (
        <CategoryList
          categories={this.state.categories}
          trainings={this.state.trainings}
          activeIndex={this.state.activeIndex}
          onClick={(index) => this.onClickHandler(index)}
        />
      );
    }

    return (
      <div className={classes.Service}>
        <Banner page="training" />
        {content}
        {/* <Form title={formData.title} inputs={formData.inputs} /> */}
      </div>
    );
  }
}

export default Training;
