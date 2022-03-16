import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Нүүр</NavigationItem>
        <NavigationItem link="/about">Бидний тухай</NavigationItem>
        <NavigationItem link="/product">Бүтээгдэхүүн</NavigationItem>
        <NavigationItem link="/service">Үйлчилгээ</NavigationItem>
        <NavigationItem link="/training">Сургалт</NavigationItem>
        <NavigationItem link="/kidsclub">Kids Club</NavigationItem>
        <NavigationItem link="/news">Мэдээ</NavigationItem>
        <NavigationItem link="/admin">Админ</NavigationItem>
        <NavigationItem link="/page/1">Edit</NavigationItem>
    </ul>
);

export default navigationItems;
