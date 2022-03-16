import React from 'react';
import parse from 'html-react-parser';

import classes from './ServiceList.module.scss';

const ServiceList = (props) => {
    let items = [];
    let content = null;
    if (props.services.length > 0) {
        props.services.forEach((item, index) => {
            items.push(
                <div key={index} className={classes.HeaderItem}>
                    <img src={item.icon} alt={item.title} onClick={() => props.onClick(index)} />
                    <h3>{item.title}</h3>
                    {props.activeIndex === index ?
                        <div className={classes.HeaderArrow}></div> :
                        <div></div>
                    }
                </div>
            );
        });

        content = (
            <div className={classes.ContentContainer}>
                <div className={classes.ContentItem}>
                    {parse(props.services[props.activeIndex].body)}
                </div>
            </div>
        );
    }

    return (
        <div className={classes.Container}>
            <div className={classes.HeaderContainer}>
                {items}
            </div>
            {content}
        </div>
    );
}

export default ServiceList;
