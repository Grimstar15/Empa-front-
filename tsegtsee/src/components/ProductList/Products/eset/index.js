import classes from "./eset.module.scss";
import React from "react";
export const Eset = (props) => {
  return (
    <div className={classes.Container}>
      <h2>ESET таныг кибер халдлагаас сэргийлнэ.</h2>
      <div className={classes.ContentIte}>
        <div className={classes.Element}>
          <div className={classes.BBorder}>
            <img src="http://empasoft.mn/wp-content/uploads/2020/03/e4.png" />
          </div>
          <p>Интернэт хамгаалалт</p>
        </div>

        <div className={classes.Element}>
          <div className={classes.BBorder}>
            <img src="http://empasoft.mn/wp-content/uploads/2020/03/e2.png" />
          </div>
          <p>Нууц үгийн хамгаалалт</p>
        </div>
        <div className={classes.Element}>
          <div className={classes.BBorder}>
            <img src="http://empasoft.mn/wp-content/uploads/2020/03/e3.png" />
          </div>
          <p>Имэйл хамгаалалт</p>
        </div>
        <div className={classes.Element}>
          <div className={classes.BBorder}>
            <img src="http://empasoft.mn/wp-content/uploads/2020/03/e1.png" />
          </div>
          <p>Гэрийн төхөөрөмжийн хамгаалалт</p>
        </div>
        <div className={classes.Element}>
          <div className={classes.BBorder}>
            <img src="http://empasoft.mn/wp-content/uploads/2020/03/e5.png" />
          </div>
          <p>Эцсийн цэгийн хамгаалалт</p>
        </div>
      </div>
    </div>
  );
};
export default Eset;
