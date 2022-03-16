import React from 'react';

import Cards from '../../components/Cards/Cards';
import valueImg1 from '../../assets/images/vision.png';
import valueImg2 from '../../assets/images/mission.png';
import valueImg3 from '../../assets/images/slogan.png';

import classes from './Vision.module.scss';

const values = (props) => (
    <div className={classes.Values}>
        <Cards>
            <div className={classes.Value}>
                <img src={valueImg1} alt="Vision" />
                <h2>Алсын хараа</h2>
                <p>Бид зах зээлд тэргүүлэгч, загвар компани болно.</p>
            </div>
            <div className={classes.Value}>
                <img src={valueImg2} alt="Mission" />
                <h2>Эрхэм зорилго</h2>
                <p>Бид шилдэг технологи, шинэлэг шийдлээр хэрэглэгчдэд үнэ цэнийг бий болгоно.</p>
            </div>
            <div className={classes.Value}>
                <img src={valueImg3} alt="Slogan" />
                <h2>Бидний уриа</h2>
                <p>Бид процессыг хялбарчлана.</p>
            </div>
        </Cards>
    </div>
);

export default values;