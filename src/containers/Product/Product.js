import React, { Component } from "react";

import axios from "../../axios-connect";
import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import Form from "../../components/Form/Form";
import img1 from "../../assets/images/value1.png";

import classes from "./Product.module.scss";

class Product extends Component {
  state = {
    activeIndex: 0,
    products: [
      {
        id: 1,
        title: "Kaspersky",
        logoURL: "http://13.76.216.31:5000/static/img/vendor/kaspersky.png",
        body: "this is body texy",
      },
      {
        id: 2,
        title: "Device lock",
        logoURL: "http://13.76.216.31:5000/static/img/vendor/devicelock.png",
        body: "DeviceLock® DLP Suite систем нь хамгийн бага зардлаар хэлбэр ба агуулгын түвшинд мэдээлэл гадагш алдагдахаас сэргийлсэн шийдэл юм. Олон үет шинжилгээний систем нь мэдээлэл алдагдаж болзошгүй урсгал, цэг бүрд мэдээллийг нарийвчлан хянах үүрэгтэй. Чухал мэдээлэл гадагш гарсан эсэхийг цаашид магадлах зорилгоор мэдээлэл илгээж, хүлээн авч буй зөөврийн медиа, PnP бүхий төхөөрөмжүүдэд агуулгын шинжилгээ хийж, шүүдэг. Хамгаалалтын системийн админууд DeviceLock-ийн тусламжтай компаний компьютер дээр мэдээлэл дамжуулах, хүлээн авах, хадгалах эрхийг хэрэглэгчийн ажлын чиг үүрэгт нийцүүлэн тохируулах боломжтой. Үүний үр дүнд компьютерийн цахим орчинд хууль ёсны хэрэглэгчид саад тотгоргүй ажиллаж, заасан хязгаараас давахыг оролдсон санаатай ба санамсаргүй бүх үйлдлийг зогсооно. DeviceLock DLP Suite нь тус бүрдээ тухайн шаардлагыг хангахад зориулагдсан, ашиглалтын лиценз бүхий таван модулийн нэгдэл юм",
      },
      {
        id: 3,
        title: "ESET",
        logoURL: "http://13.76.216.31:5000/static/img/vendor/eset.png",
        body: "this is body texy",
      },
      {
        id: 4,
        title: "Office365",
        logoURL: "http://13.76.216.31:5000/static/img/vendor/microsoft.png",
        body: "this is body texy",
      },
    ],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("/product")
      .then((response) => {
        console.log(response.data);
        this.setState({
          isLoaded: true,
          // products: [...response.data],
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
      title: "Захиалга",
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
        <ProductList
          products={this.state.products}
          activeIndex={this.state.activeIndex}
          onClick={(index) => this.onClickHandler(index)}
        />
      );
    }

    return (
      <div className={classes.Product}>
        <Header isHome={false} title={"Бүтээгдэхүүн"} bgColor="product" />
        {content}
        {/* <Form title={formData.title} inputs={formData.inputs} />
        {console.log(this.state.activeIndex)} */}
      </div>
    );
  }
}

export default Product;
