import React from 'react';

import empasoftLogo from '../../assets/images/empa_logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={empasoftLogo} alt="Empasoft Logo" />
    </div>       
);

export default logo;