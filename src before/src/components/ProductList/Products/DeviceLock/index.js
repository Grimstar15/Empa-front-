import React, { useState } from "react";
import classes from "./DeviceLock.module.scss";
export const DeviceLock = (props) => {
  const [varData, setvarData] = useState([
    {
      title: "Төхөөрөмжийн хандатын хяналт",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d1.jpg",
    },
    {
      title: "Сүлжээний холболтын хяналт",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d2.png",
    },
    {
      title: "Агуулга шүүх",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d3.jpg",
    },
    {
      title: "Хостод суурилсан OCR",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d4.jpg",
    },
    {
      title: "Агуулга илрүүлэх",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d5.png",
    },
    {
      title: "Хамгаалалтыг хуурамчаар үйлдэх",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d6.jpg",
    },
    {
      title: "Active Directory Group Policy-д нэгтгэсэн",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d7.jpg",
    },
    {
      title: "Төвлөрсөн тохиргоо ба суурилуулалт",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d8.jpg",
    },
    {
      title: "Түгээмэл төрлийн файлуудыг хянана",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d9.jpg",
    },
    {
      title: "Clipboard (түр санах ойн) хяналт",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d10.jpg",
    },
    {
      title: "Медиа зөвшөөрлийн жагсаалт (Media White List)",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d11.png",
    },
    {
      title: "USB зөвшөөрлийн жагсаалт (USB While List)",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d12.jpg",
    },
    {
      title: "Зөвшөөрлийн түр жагсаалт",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d13.jpg",
    },
    {
      title: "Аудит",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d14.jpg",
    },
    {
      title: "Хуулбарлах (Shadowing)",
      img: "http://empasoft.mn/wp-content/uploads/2020/03/d15.jpg",
    },
  ]);

  return (
    <div>
      <div className={classes.Container}>
        <h2>
          Сүлжээн дэх хэрэглэгчийн төхөөрөмжүүдийг хамгаалж, түүгээр мэдээлэл
          анзаарагдалгүй гадагш алдагдахаас сэргийлэх нь
        </h2>
        <p>
          DeviceLock® DLP Suite систем нь хамгийн бага зардлаар хэлбэр ба
          агуулгын түвшинд мэдээлэл гадагш алдагдахаас сэргийлсэн шийдэл юм.
          Олон үет шинжилгээний систем нь мэдээлэл алдагдаж болзошгүй урсгал,
          цэг бүрд мэдээллийг нарийвчлан хянах үүрэгтэй. Чухал мэдээлэл гадагш
          гарсан эсэхийг цаашид магадлах зорилгоор мэдээлэл илгээж, хүлээн авч
          буй зөөврийн медиа, PnP бүхий төхөөрөмжүүдэд агуулгын шинжилгээ хийж,
          шүүдэг. Хамгаалалтын системийн админууд DeviceLock-ийн тусламжтай
          компаний компьютер дээр мэдээлэл дамжуулах, хүлээн авах, хадгалах
          эрхийг хэрэглэгчийн ажлын чиг үүрэгт нийцүүлэн тохируулах боломжтой.
          Үүний үр дүнд компьютерийн цахим орчинд хууль ёсны хэрэглэгчид саад
          тотгоргүй ажиллаж, заасан хязгаараас давахыг оролдсон санаатай ба
          санамсаргүй бүх үйлдлийг зогсооно. DeviceLock DLP Suite нь тус бүрдээ
          тухайн шаардлагыг хангахад зориулагдсан, ашиглалтын лиценз бүхий таван
          модулийн нэгдэл юм
        </p>
      </div>
      <div className={classes.Items}>
        {varData.map((el) => (
          <div className={classes.item}>
            <div className={classes.imgBorder}>
              <img src={el.img} />
            </div>
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DeviceLock;
