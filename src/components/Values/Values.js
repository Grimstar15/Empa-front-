import React from 'react';

import Cards from '../../components/Cards/Cards';
import valueImg1 from '../../assets/images/value1.png';
import valueImg2 from '../../assets/images/value2.png';
import valueImg3 from '../../assets/images/value3.png';

import classes from './Values.module.scss';

const values = (props) => (
    <div className={classes.Values}>
        <Cards>
            <div className={classes.Value}>
                <img src={valueImg1} alt="Value" />
                <h2>Бидний үнэт зүйлс</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis nisl faucibus volutpat aliquet. Fusce pharetra diam accumsan ex accumsan pharetra.</p>
            </div>
            <div className={classes.Value}>
                <img src={valueImg2} alt="Value" />
                <h2>Бидний уриа</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis nisl faucibus volutpat aliquet. Fusce pharetra diam accumsan ex accumsan pharetra.</p>
            </div>
            <div className={classes.Value}>
                <img src={valueImg3} alt="Value" />
                <h2>Бид хэн бэ?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis nisl faucibus volutpat aliquet. Fusce pharetra diam accumsan ex accumsan pharetra.</p>
            </div>
        </Cards>
    </div>
);

export default values;