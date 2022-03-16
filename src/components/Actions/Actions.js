import React from "react";

import Button from "../UI/Button/Button";

import softwareImg from "../../assets/images/softwares.png";
import serviceImg from "../../assets/images/services.png";
import trainingImg from "../../assets/images/training.png";
import kidsclubImg from "../../assets/images/kidsclub.png";

import classes from "./Actions.module.scss";

const values = (props) => (
  <div className={classes.Actions}>
    <div className={classes.Action}>
      <div className={classes.ImageContainer}>
        <img src={softwareImg} alt="Value" />
      </div>
      <div className={classes.ContentContainer}>
        <h2>Лицензтэй програм хангамж</h2>
        <p>
          Misrosoft, Kaspersky, DellEMC, DeviceLock зэрэг дэлхийн нэр хүнд бүхий
          байгууллагын програм хангамжийг албан ёсны эрхтэйгээр нийлүүлж байна.
        </p>
        <Button link="/product" color={"white"}>
          Дэлгэрэнгүй
        </Button>
      </div>
    </div>
    <div className={classes.Action}>
      <div className={classes.ContentContainer}>
        <h2>Нэвтрүүлэлт, Хөгжүүлэлт, Үйлчилгээ</h2>
        <p>
          Microsoft 365 болон бусад програм хангамжийн нэвтрүүлэлт,
          хөгжүүлэлтийн ажлыг олон улсад хүлээн зөвшөөрөгдсөн мэргэжлийн
          инженер, хөгжүүлэгчид хийж гүйцэтгэж байна.
        </p>
        <Button link="/service">Дэлгэрэнгүй</Button>
      </div>
      <div className={classes.ImageContainer}>
        <img src={serviceImg} alt="Value" />
      </div>
    </div>
    <div className={classes.Action}>
      <div className={classes.ImageContainer}>
        <img src={trainingImg} alt="Value" />
      </div>
      <div className={classes.ContentContainer}>
        <h2>Сургалт</h2>
        <p>
          Microsoft албан ёсны сургалтын Монгол дахь цор ганц төв. Мэдээлэл
          технологийн бүх төрлийн сургалтыг зохион байгуулж, олон улсын
          шалгалтын төв.
        </p>
        <Button link="/training" color={"white"}>
          Дэлгэрэнгүй
        </Button>
      </div>
    </div>
    <div className={classes.Action}>
      <div className={classes.ContentContainer}>
        <h2>Kids Club</h2>
        <p>
          Мэдээлэл технологид хүүхэд багачуудын сонирхолыг хөтөлж, чиглүүлэх
          зорилгоор бид KidsClub үйл ажиллагаагаа 2020 онд эхлүүллээ.
        </p>
        <Button link="/kidsclub">Дэлгэрэнгүй</Button>
      </div>
      <div className={classes.ImageContainer}>
        <img src={kidsclubImg} alt="Value" />
      </div>
    </div>
  </div>
);

export default values;
