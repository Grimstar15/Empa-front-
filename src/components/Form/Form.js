import React from 'react';

import Button from '../UI/Button/Button';
// import Input from '../UI/Input/Input';

import classes from './Form.module.scss';

const form = (props) => {
    let content = [];

    props.inputs.forEach((item, index) => {
        content.push(
            <div key={index} className={classes.FormInput}>
                <label>{item.label}</label>
                <input />
            </div>
        )
    });

    return (
        <div className={classes.Form}>
            <h2>{props.title}</h2>
            <form action="">
                {content}
                <Button link="/">Илгээх</Button>
            </form>
        </div>
    );
}

export default form;
