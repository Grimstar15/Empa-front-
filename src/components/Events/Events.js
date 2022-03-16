import React from 'react';

import Cards from '../../components/Cards/Cards';
import inspireImg from '../../assets/images/inspire.jpg';
import womenInTech from '../../assets/images/womenintech.jpg';

import classes from './Events.module.scss';

const events = (props) => (
    <div className={classes.Events}>
        <h1>Арга хэмжээ</h1>
        <p>Бид нийгмийн хариуцлагын хүрээнд технологийн арга хэмжээнүүдийг зохион байгуулдаг</p>
        <Cards>
            <div className={classes.Event}>
                <img src={womenInTech} alt="Value" />
                <div className={classes.EventContent}>
                    <h2>Mongolian women in tech</h2>
                    <p>Энэ бол шинийг эрэлхийлэгч, санаачлагч эмэгтэйчүүдийн уулзалт</p>
                    <p>Энэ бол хөдөлмөрч, тууштай суралцагч эмэгтэйчүүдийн цугларах талбар</p>
                </div>
            </div>
            <div className={classes.Event}>
                <img src={inspireImg} alt="Value" />
                <div className={classes.EventContent}>
                    <h2>Inspire - Цахим шилжилт</h2>
                    <p>Өнөөгийн хурдтай өөрчлөгдөж буй, хурц өрсөлдөөнт дижитал эринд амжилттай, тогтвортой үйл ажиллагаа явуулахын тулд аливаа компани дотоод соёлоо шинэчлэн технологийг үр дүнтэй ашигладаг ажилтнуудаар багаа бүрдүүлэх шаардлага тулгарч байна</p>
                </div>
            </div>
        </Cards>
    </div>
);

export default events;