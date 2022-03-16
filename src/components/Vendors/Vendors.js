import React from "react";

import Cards from "../../components/Cards/Cards";

import classes from "./Vendors.module.scss";

const vendors = (props) => (
  <div className={classes.Vendors}>
    <Cards>
      <div className={classes.Vendor}>
        <div className={classes.ImageContainer}>
          <img
            src={"http://13.76.216.31:5000/static/img/vendor/microsoft.png"}
            alt="Microsoft"
          />
        </div>
        <div className={classes.TextContainer}>
          <h2>Microsoft 365</h2>
          <p>Үүлэн технологид суурилсан дижитал шилжилт.</p>
        </div>
      </div>
      <div className={classes.Vendor}>
        <div className={classes.ImageContainer}>
          <img
            src={"http://13.76.216.31:5000/static/img/vendor/dellemc.png"}
            alt="DellEmc"
          />
        </div>
        <div className={classes.TextContainer}>
          <h2>Dell-Gold Partner</h2>
          <p>
            Байгууллагын мэдээлэл технологийн дэд бүтцийн тоног төхөөрөмжүүд.
          </p>
        </div>
      </div>
      <div className={classes.Vendor}>
        <div className={classes.ImageContainer}>
          <img
            src={"http://13.76.216.31:5000/static/img/vendor/kaspersky.png"}
            alt="Kaspersky"
          />
        </div>
        <div className={classes.TextContainer}>
          <h2>Kaspersky-Silver Partner</h2>
          <p>Дэлхийд хамгийн олон удаа туршигдсан аюулгүй байдлын шийдэл.</p>
        </div>
      </div>
      <div className={classes.Vendor}>
        <div className={classes.ImageContainer}>
          <img
            src={"http://13.76.216.31:5000/static/img/vendor/devicelock.png"}
            alt="Devicelock"
          />
        </div>
        <div className={classes.TextContainer}>
          <h2>Devicelock</h2>
          <p>Мэдээллийн урсгал, аюулгүй байдлын шийдэл.</p>
        </div>
      </div>
      <div className={classes.Vendor}>
        <div className={classes.ImageContainer}>
          <img
            src={"http://13.76.216.31:5000/static/img/vendor/eset.png"}
            alt="Eset"
          />
        </div>
        <div className={classes.TextContainer}>
          <h2>ESET</h2>
          <p>Хувь хүн албан байгууллагад зориулсан аюулгүй байдлын шийдэл.</p>
        </div>
      </div>
      <div className={classes.Vendor}>
        <div className={classes.ImageContainer}>
          <img
            src={"http://13.76.216.31:5000/static/img/vendor/acunetix.png"}
            alt="Acunetix"
          />
        </div>
        <div className={classes.TextContainer}>
          <h2>Acunetix</h2>
          <p>Мэдээллийн урсгал, аюулгүй байдлын шийдэл.</p>
        </div>
      </div>
    </Cards>
  </div>
);

export default vendors;
