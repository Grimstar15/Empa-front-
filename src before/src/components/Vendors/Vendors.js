import React from 'react';

import Cards from '../../components/Cards/Cards';

import classes from './Vendors.module.scss';

const vendors = (props) => (
    <div className={classes.Vendors}>
        <Cards>
            <div className={classes.Vendor}>
                <div className={classes.ImageContainer}>
                    <img src={'http://localhost:5000/static/img/vendor/microsoft.png'} alt="Microsoft" />
                </div>
                <div className={classes.TextContainer}>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={classes.Vendor}>
                <div className={classes.ImageContainer}>
                    <img src={'http://localhost:5000/static/img/vendor/dellemc.png'} alt="DellEmc" />
                </div>
                <div className={classes.TextContainer}>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={classes.Vendor}>
                <div className={classes.ImageContainer}>
                    <img src={'http://localhost:5000/static/img/vendor/kaspersky.png'} alt="Kaspersky" />
                </div>
                <div className={classes.TextContainer}>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={classes.Vendor}>
                <div className={classes.ImageContainer}>
                    <img src={'http://localhost:5000/static/img/vendor/devicelock.png'} alt="Devicelock" />
                </div>
                <div className={classes.TextContainer}>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={classes.Vendor}>
                <div className={classes.ImageContainer}>
                    <img src={'http://localhost:5000/static/img/vendor/eset.png'} alt="Eset" />
                </div>
                <div className={classes.TextContainer}>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={classes.Vendor}>
                <div className={classes.ImageContainer}>
                    <img src={'http://localhost:5000/static/img/vendor/acunetix.png'} alt="Acunetix" />
                </div>
                <div className={classes.TextContainer}>
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </Cards>
    </div>
);

export default vendors;
