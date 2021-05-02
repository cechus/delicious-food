import React from "react";
import Icon from "../Icon/Icon";
import styles from "./Card.module.css";
import clsx from "clsx";

export default function Card() {
  return (
    <div className={clsx(styles.cardContainer)}>
      <div className={clsx(styles.cardImage)}>img</div>
      <div className={clsx(styles.cardDetails)}>
        <h1>Strawberry and blue</h1>
        <p>Lorem ipsum color sit amet, consecteur adipiscing alit. Mi mauris</p>
        <div>
          <span>$15.00 us</span>
          <Icon name="SHOP" color="blue"/>
        </div>
      </div>
    </div>
  );
}
