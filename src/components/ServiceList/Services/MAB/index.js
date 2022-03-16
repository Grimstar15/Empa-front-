import Button from "../../../UI/Button/Button";
import React from "react";
import classes from "./MAB.module.scss";
const MAB = () => {
  return (
    <div className={classes.NewsList}>
      <div className={classes.News}>
        <img
          src={
            "https://github.com/GrimStarr/EImages/blob/main/images/inspire.jpg?raw=true"
          }
          alt="News"
        />
        <h2>Inspire 2019: Бизнесээ дараагийн түвшинд гаргах боломж</h2>
        <p>
          Өнөөгийн хурдтай өөрчлөгдөж буй, хурц өрсөлдөөнт дижитал эринд
          амжилттай, тогтвортой үйл ажиллагаа явуулахын тулд аливаа компани
          дотоод соёлоо шинэчлэн технологийг үр дүнтэй ашигладаг ажилтнуудаар
          багаа бүрдүүлэх [...]
        </p>
        <Button link="/">Дэлгэрэнгүй</Button>
      </div>
      <div className={classes.News}>
        <img
          src={
            "https://github.com/GrimStarr/EImages/blob/main/images/inspire.jpg?raw=true"
          }
          alt="News"
        />
        <h2>Inspire 2019: Бизнесээ дараагийн түвшинд гаргах боломж</h2>
        <p>
          Өнөөгийн хурдтай өөрчлөгдөж буй, хурц өрсөлдөөнт дижитал эринд
          амжилттай, тогтвортой үйл ажиллагаа явуулахын тулд аливаа компани
          дотоод соёлоо шинэчлэн технологийг үр дүнтэй ашигладаг ажилтнуудаар
          багаа бүрдүүлэх [...]
        </p>
        <Button link="/">Дэлгэрэнгүй</Button>
      </div>
    </div>
  );
};

export default MAB;
