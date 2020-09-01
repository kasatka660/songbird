import React from "react";
import styles from "./Categories.module.css";
import CategoryList from "../../../assets/const/CategoryList";

const Categories: React.FC<{ currentCategory: number }> = ({
  currentCategory,
}) => {
  return (
    <nav>
      <ul className={styles.CategoriesList}>
        {CategoryList.map((item, key) => (
          <li
            className={
              styles.CategoryItem +
              " " +
              (currentCategory === key ? styles.ActiveCategoryItem : "")
            }
            key={key}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
