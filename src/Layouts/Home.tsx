import React from "react"
import Card from "../Components/Card/Card"
import Search from "../Components/Search/Search"
import styles from "./Home.module.css"
export default function Home() {
  return (
    <div className="container">
      <div className={styles.banner}>
        <div className={styles.left}>
          <h1 className={styles.title}>Cheap Food</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nisi,
            iste ipsam suscipit, consequatur voluptates nihil eius accusantium
            tempora impedit nobis! Est ut, quasi quaerat itaque eos eveniet
            eligendi eius.
          </p>
          <Search />
        </div>
        <div>card 1 ca2</div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  )
}
