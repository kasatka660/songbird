import React from "react";
import styles from './Categories.module.css'

const categoriesList = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
const Categories: React.FC = () => {
  return <nav>
          <ul className={styles.CategoriesList}>
            {categoriesList.map((item, key) =>(<li className={styles.CategoryItem} key={key}><a>{item}</a></li>))}
          </ul>
        </nav>;
}


export default Categories;
