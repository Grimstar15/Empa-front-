import React, { Component } from "react";
import axios from "../../axios-connect";

import Header from "../../components/Header/Header";
import KidsValues from "../../components/KidsValues/KidsValues";
import KidsTrainings from "../../components/Training/KidsTrainingList/KidsTrainingList";
import KidsBenefits from "../../components/KidsBenefits/KidsBenefits";
import KidsProgram from "../../components/KidsProgram/KidsProgram";
import Form from "../../components/Form/Form";

import classes from "./Kidsclub.module.scss";

class Kidsclub extends Component {
  state = {
    activeIndex: 0,
    trainings: [
      {
        id: "1",
        title: "kids surgalt",
        brief: "kids brief",
        capacity: "25",
        price: "25000",
        duration: "1 week",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/inspire.jpg?raw=true",
        body: "kids surgalt body",
        // category_id integer,
        // CONSTRAINT fk_category_id
        //     FOREIGN KEY (category_id)
        //     REFERENCES training_category(id)
      },
      {
        id: "2",
        title: "kids surgalt",
        brief:
          "Интернет хүүхдэд тийм ч ээлтэй газар биш. Ялангуяа ямар нэг хамгаалалтгүй үед. Таны хүүхэд өөрийн дуртай веб сайт руугаа орох гэж байхад насанд хүрэгчдийн сайт руу автоматаар орох, садар самуун болон хүчирхийллийг сурталчилсан реклам гарахыг үгүйсгэхгүй.",
        capacity: "25",
        price: "25000",
        duration: "1 week",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/inspire.jpg?raw=true",
        body: "Интернет хүүхдэд тийм ч ээлтэй газар биш. Ялангуяа ямар нэг хамгаалалтгүй үед. Таны хүүхэд өөрийн дуртай веб сайт руугаа орох гэж байхад насанд хүрэгчдийн сайт руу автоматаар орох, садар самуун болон хүчирхийллийг сурталчилсан реклам гарахыг үгүйсгэхгүй. Иймд эцэг эхчүүд тоглоомын талбайд, анги танхимд нь хүүхдийнхээ аюулгүй байдалд анхаардаг шигээ интернет орчинд ч өөрсдийн хяналтыг тавих хэрэгтэй. Хүүхдийнхээ сэтгэл зүйн аюулгүй байдлыг хамгаалалтгүй компьютерт даатгаж болохгүй.",
      },
      {
        id: "3",
        title: "Active directory",
        brief: "AD surgalt",
        capacity: "5",
        price: "100000",
        duration: "2 day",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/inspire.jpg?raw=true",
        body: "kids surgalt body",
      },
      {
        id: "4",
        title: "Active directory",
        brief: "AD surgalt",
        capacity: "5",
        price: "100000",
        duration: "2 day",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/services.png?raw=true",
        body: "kids surgalt body",
      },
      {
        id: "5",
        title: "Active directory",
        brief: "AD surgalt",
        capacity: "5",
        price: "100000",
        duration: "2 day",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/services.png?raw=true",
        body: "kids surgalt body",
      },
      {
        id: "6",
        title: "Active directory",
        brief: "AD surgalt",
        capacity: "5",
        price: "100000",
        duration: "2 day",
        imgurl:
          "https://github.com/GrimStarr/EImages/blob/main/images/services.png?raw=true",
        body: "kids surgalt body",
      },
    ],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("/training")
      .then((response) => {
        this.setState({
          isLoaded: true,
          trainings: [...response.data.training],
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: false,
          error: error.message,
        });
      });
  }

  render() {
    let formData = {
      title: "Сургалтанд бүртгүүлэх",
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
      <div className={classes.Kidsclub}>
        <Header isHome={false} title={"Kids Club"} bgColor="kidsclub" />
        <KidsValues />
        <KidsTrainings trainings={this.state.trainings} />
        <KidsBenefits />

        {/* <Form title={formData.title} inputs={formData.inputs} /> */}
      </div>
    );
  }
}

export default Kidsclub;
