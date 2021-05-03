import React from "react"
import { foods } from "Components/rawData"
import Card from "Components/Card/Card"
import styles from "./Cards.module.css"

export default function Cards() {
  return (
    <div className={styles.cardsContainer}>
      {foods.map((food) => (
        <Card key={food.id} food={food} />
      ))}
    </div>
  )
}
