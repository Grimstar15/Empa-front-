import React from 'react';

import valueImg1 from '../../assets/images/icon_kidsvalue1.png';
import valueImg2 from '../../assets/images/icon_kidsvalue2.png';
import valueImg3 from '../../assets/images/icon_kidsvalue3.png';
import valueImg4 from '../../assets/images/icon_kidsvalue4.png';

import classes from './KidsValues.module.scss';

const values = (props) => (
    <div className={classes.Container}>
        <div className={classes.HeaderContainer}>
            <h2>Таны хүүхэд манай сургалтанд хамрагдсанаар:</h2>
        </div>
        <div className={classes.ContentContainer}>
            <div className={classes.Item}>
                <img src={valueImg1} alt="Value" />
                <h3>Цагийг үр бүтээлтэй өнгөрөөнө</h3>
                <p>Багаар болон ганцаарчлан даалгавар гүйцэтгэх сэтгэн бодох чадвар сайжирч бусадтай хамт хөгжих боломжтой.</p>
            </div>
            <div className={classes.Item}>
                <img src={valueImg2} alt="Value" />
                <h3>Үзэл бодлоо чөлөөтэй илэрхийлж сурна</h3>
                <p>Мэдээллийн аюулгүй байдлын үндсэн ойлголтуудыг мэтгэлцээний аргаар олж авна.</p>
            </div>
            <div className={classes.Item}>
                <img src={valueImg3} alt="Value" />
                <h3>Албан ёсны лиценз эзэмшинэ</h3>
                <p>Хүүхэд бүр Office 365 албан ёсны лиценз эзэмшигч болно.</p>
            </div>
            <div className={classes.Item}>
                <img src={valueImg4} alt="Value" />
                <h3>Хүүхдийн мэдээллийн аюулгүй байдал</h3>
                <p>Эцэг эх хүүхэд бүрт Kaspersky Safe Kids лиценз нэг жилийн эрх үнэ төлбөргүй очно.</p>
            </div>
        </div>
    </div>
);

export default values;