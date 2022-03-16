import React from 'react';

import classes from './Event.module.scss';

const event = (props) => {
    let content = [];
    props.event.items.forEach((item, index) => {
        content.push(<p key={index}>{item.brief}</p>);
        if (item.imgurl !== '') {
            content.push(
                <img src={item.imgurl} alt="Event" />
            )
        }
    })

    return (
        <div className={classes.Events} style={{textAlign: props.txtAlign}}>
            <h2>{props.event.year} ОН</h2>
            {content}
        </div>
    );
};

export default event;
