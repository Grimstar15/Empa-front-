import React, { useContext } from "react";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import { UserContext } from "../../../UserContext";

const NavigationItems = (props) => {
  const data = useContext(UserContext);
  console.log(useContext(UserContext));
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Нүүр
      </NavigationItem>
      <NavigationItem link="/about">Бидний тухай</NavigationItem>
      <NavigationItem link="/product">Бүтээгдэхүүн</NavigationItem>
      <NavigationItem link="/service">Үйлчилгээ</NavigationItem>
      <NavigationItem link="/training">Сургалт</NavigationItem>
      <NavigationItem link="/kidsclub">Kids Club</NavigationItem>
      <NavigationItem link="/news">Мэдээ</NavigationItem>
      {localStorage.getItem("token") ? (
        <NavigationItem link="/admin">Админ</NavigationItem>
      ) : (
        ""
      )}
    </ul>
  );
};

export default NavigationItems;
