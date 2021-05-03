import clsx from "clsx"
import { categories } from "Components/rawData"
import { useState } from "react"
import styles from "./Categories.module.css"

export default function Categories() {
  const [categoryId, setCategoryId] = useState<number>(0)
  const selectCategoryHandle = (id: number) => {
    setCategoryId(id)
  }
  return (
    <div className={styles.categoryContainer}>
      {categories.map((category) => {
        return (
          <div
            onClick={() => selectCategoryHandle(category.id)}
            className={clsx(styles.category, {
              [styles.active]: categoryId === category.id,
            })}
            key={category.id}
          >
            {category.label}
          </div>
        )
      })}
    </div>
  )
}
