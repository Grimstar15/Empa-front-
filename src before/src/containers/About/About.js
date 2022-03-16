import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Vision from '../../components/Vision/Vision';
import Vendors from '../../components/Vendors/Vendors';
import Timeline from '../../components/Timeline/Timeline';

import classes from './About.module.scss';

class About extends Component {
    render() {
        return (
            <div className={classes.About}>
                <Header isHome={false} title={'Бидний Тухай'} bgColor='about' />
                <Vision />
                <Vendors />
                <Timeline />
            </div>
        );
    }
}

export default About;
