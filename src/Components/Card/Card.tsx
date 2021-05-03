import React from "react"
import Icon from "../Icon/Icon"
import styles from "./Card.module.css"
import clsx from "clsx"

export default function Card() {
  return (
    <div className={clsx(styles.cardContainer)}>
      <div className={clsx(styles.cardImage)}>
        <img src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80" />
      </div>
      <div className={clsx(styles.cardDetails)}>
        <h1>Strawberry and blue</h1>
        <p>Lorem ipsum color sit amet, consecteur adipiscing alit. Mi mauris</p>
        <div className={styles.cardFooter}>
          <span>$15.00 us</span>
          <div className={clsx(styles.icon)}>
            <Icon name="SHOP" color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}
