import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Values from '../../components/Values/Values';
import Actions from '../../components/Actions/Actions';
import Events from '../../components/Events/Events';
import News from '../../components/News/News';

import classes from './Home.module.scss';

class Home extends Component {
    render() {
        return (
            <div className={classes.Home}>
                <Header isHome={true} />
                <Values />
                <Actions />
                <Events />
                <News />
            </div>
        );
    }
}

export default Home;
