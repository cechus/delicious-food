import Icon from "../Icon/Icon"
import styles from "./Search.module.css"
export default function Search() {
  return (
    <div className={styles.root}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search your food"
      />
      <button className={styles.button}>
        <Icon name="SEARCH" />
      </button>
    </div>
  )
}
