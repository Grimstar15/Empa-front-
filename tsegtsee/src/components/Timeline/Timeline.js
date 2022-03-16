import React from "react";

import Event from "./Event/Event";
import classes from "./Timeline.module.scss";

const events = [
  {
    year: "2006",
    items: [
      {
        brief:
          "Майкрософт ХХК-ийн албан ёсны Silver буюу Мөнгөн түнш байгууллага болов.",
        imgurl: "",
      },
      {
        brief:
          "Person Vue Олон улсын шалгалтын төвийн эрхийг авч Монголдоо МТ чиглэлийн шалгалтыг албан ёсоор авав.",
        imgurl: "",
      },
    ],
  },
  {
    year: "2007",
    items: [
      {
        brief:
          "Майкрософт ХХК-ийн албан ёсны Gold буюу Алтан түнш байгууллага болов.",
        imgurl: "",
      },
      {
        brief: "Bitdefender ийн албан ёсны дистрибютер болов.",
        imgurl: "",
      },
      {
        brief:
          "Хадгаламж банкинд вирусын эсрэг цогц программ хангамж нийлүүлэх ажлыг хийж гүйцэтгэв.",
        imgurl: "",
      },
      {
        brief:
          "Капитрон банкинд Майкрософтын албан ёсны бараа, бүтээгдэхүүн нийлүүлэх, тохируулах ажлыг амжилттай хийж гүйцэтгэв..",
        imgurl: "",
      },
    ],
  },
  {
    year: "2008",
    items: [
      {
        brief:
          "Майкрософт ХХК-ийн албан ёсны Gold буюу Алтан түнш байгууллагаар дахин сонгогдов.",
        imgurl: "",
      },
      {
        brief: "VMware компанийн Professional Partner болов.",
        imgurl: "",
      },
      {
        brief:
          "ХААН Банкны Төв офис, УБ хотын бүх салбарын 2500 орчим компьютерийн Майкрософт Офис программын лицензтэй программ хангамжуудыг нэвтрүүлж, компьютерийн төвлөрсөн удирдлагын Домайн сүлжээнд холбов.",
        imgurl: "",
      },
      {
        brief:
          "Мянганы сорилтын санд Майкрософт офисын албан ёсны программ хангамжийг нийлүүлэх ажлыг гүйцэтгэв.",
        imgurl: "",
      },
    ],
  },
  {
    year: "2009",
    items: [
      {
        brief:
          "Майкрософт ХХК-ийн албан ёсны Gold буюу Алтан түнш байгууллагаар дахин сонгогдов.",
        imgurl: "",
      },
      {
        brief:
          "KPM ХХК-д Майкрософт Офис программын лизензтэй программ хангамжуудыг нэвтрүүлэх, нийлүүлэх ажлыг гүйцэтгэв.",
        imgurl: "",
      },
      {
        brief: "Kerio ийн Authorized Partner болов.",
        imgurl: "",
      },
    ],
  },
  {
    year: "2010",
    items: [
      {
        brief:
          "Майкрософт ХХК-ийн албан ёсны Gold буюу Алтан түнш байгууллагаар дахин сонгогдов",
        imgurl: "",
      },
      {
        brief: "Device Lock ийн албан ёсны дистрибьютер болов.",
        imgurl: "",
      },
      {
        brief:
          "Жи-Ти-Ай-Эс ХХК-д Майкрософтын өгөгдлийн бааз, төсөл, үйлдлийн системүүдийн лицензтэй программ хангамжуудыг нийлүүлэх, нэвтрүүлэх ажлыг гүйцэтгэв.",
        imgurl: "",
      },
      {
        brief:
          "Мобиком ХХК-д Майкрософтын лицензтэй программ хангамжуудыг нийлүүлэх, тохируулах ажлыг гүйцэтгэв.",
        imgurl: "",
      },
    ],
  },
  {
    year: "2011",
    items: [
      {
        brief:
          "Майкрософт компаниас Silver Server Platfom, Silver learning чадамжийн 2 гэрчилгээг гардан авав.",
        imgurl: "",
      },
      {
        brief:
          "Петровис ХХК-д Сервер дээрх мэдээллийг хэрэглэгчид дамжуулах Server/Desktop Virtualization шийдлийг нэвтрүүлэв.",
        imgurl: "",
      },
    ],
  },
  {
    year: "2012",
    items: [
      {
        brief:
          "Виртуаль офисын цогц шийдлээр “National ICT Expo 2012” үзэсгэлэнд Эмпасофт компани шалгарав.",
        imgurl: "",
      },
      {
        brief:
          "Голомт Банкинд мэдээллийн аюулгүй байдлын шийдэл болох Device Lock бүтээгдэхүүнийг нийлүүлэх, тохируулах ажлыг гүйцэтгэв.",
        imgurl: "",
      },
    ],
  },
  {
    year: "2013",
    items: [
      {
        brief: "Майкрософтын Server Platform чадамжийн гэрчилгээтэй болов.",
        imgurl: "",
      },
      {
        brief: "Kaspersky Lab-ийн албан ёсны түнш байгууллага болов.",
        imgurl: "",
      },
    ],
  },
  {
    year: "2014",
    items: [
      {
        brief:
          "Майкрософтын Silver Learning, Silver Communications, Silver Messaging, Silver Datacenter чадамжийн 4 гэрчилгээтэй болов.",
        imgurl: "",
      },
      {
        brief:
          "Төрийн банкинд Symantec exe программыг нийлүүлэх, тохируулах ажлыг гүйцэтгэв.",
        imgurl: "",
      },
      {
        brief:
          "Хас Банкны нийт 2500 орчим хэрэглэгчдийг дотоод мессенжер MS Lync, имэйлийн систем MS Exchange-ийг нэвтрүүлж, системд холбов.",
        imgurl: "",
      },
    ],
  },
  {
    year: "2015",
    items: [
      {
        brief:
          "Майкрософтын Silver Learning, Silver Communications, Silver Messaging, Silver Datacenter, Silver Collaboration and Content гэсэн 5 чадамжийн гэрчилгээг Эмпасофт компани гардан авав.",
        imgurl: "",
      },
      {
        brief:
          "Нүүдэлчин группийн хэмжээнд Device Lock, Домайн систем, Office 365-ийг нэвтрүүлэв.",
        imgurl: "",
      },
      {
        brief:
          "Хас Банкны нийт 2500 орчим хэрэглэгчдийг дотоод мессенжер MS Lync, имэйлийн систем MS Exchange-ийг нэвтрүүлж, системд холбосон.",
        imgurl: "",
      },
      {
        brief:
          "Нийслэлийн Мэдээллийн Технологийн Газарт нийт 1500 орчим хэрэглэгчтэй, домэйн сүлжээ Active Directory, дотоод мессенжер MS Lync, имэйлийн систем MS Exchange, MS Sharepoint мөн зарим хэрэглэгчдийг Microsoft үүлэн систем буюу Office 365-д холбох зэрэг ажлыг гүйцэтгэв.",
        imgurl: "",
      },
      {
        brief:
          "Вагнер Азийн нийт 500 орчим хэрэглэгчдийг сүлжээний нэгдсэн удирдлагад оруулж, лицензжүүлж, сервер болон хэрэглэгчийн системийн тохиргоо хийж, дотоод мессенжер MS Lync, имэйлийн систем MS Exchange-ийг нэвтрүүлж, хэрэглэгчдийг холбосон.",
        imgurl: "",
      },
    ],
  },
  {
    year: "2016",
    items: [
      {
        brief:
          "Майкрософтын Silver Learning, Silver Communications, Silver Messaging, Silver Datacenter, Silver Collaboration and Content гэсэн 5 чадамжийн гэрчилгээг дахин авсан.",
        imgurl: "",
      },
      {
        brief: "Dell компанийн албан ёсны Partner болов.",
        imgurl: "",
      },
      {
        brief:
          "Худалдаа хөгжлийн банкинд PCI/DESS стандартад нийцсэн Log Management Software “Splunk” системийг нэвтрүүлэв.",
        imgurl: "",
      },
      {
        brief:
          "Төрийн банк болон Электромон ХХК-д мэдээллийн аюулгүй байдлын шийдэл Device Lock программыг нийлүүлэв.",
        imgurl: "",
      },
      {
        brief: "SGS компанийг AD Домайн системд холбов.",
        imgurl: "",
      },
    ],
  },
];

const timeline = (props) => {
  let content = [];

  events.forEach((item, index) => {
    if (index % 2 === 0) {
      content.push(
        <div className={classes.TimelineItem}>
          <div className={classes.FirstItem}>
            <div className={classes.FirstDot}></div>
          </div>
          <div className={classes.SecondItem}>
            <Event event={item} txtAlign={"left"} />
          </div>
        </div>
      );
    } else {
      content.push(
        <div className={classes.TimelineItem}>
          <div className={classes.FirstItem}>
            <Event event={item} txtAlign={"right"} />
          </div>
          <div className={classes.SecondItem}>
            <div className={classes.SecondDot}></div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className={classes.Timeline}>
      <div className={classes.EmptyColLeft}></div>
      {content}
      <div className={classes.EmptyColRight}></div>
    </div>
  );
};

export default timeline;
