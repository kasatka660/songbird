import React from "react";
import styles from './AnswerOption.module.css';

const answerOptions = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
const AnswerOptions: React.FC = () => {
    return <ul className={`text-color ${styles.AnswerOptionList}`}>
        {answerOptions.map((item, key)=>
          <li className={styles.AnswerOption} key={key}>
              <span className={styles.ListItemMarker}/>{item}
          </li>
        )}
    </ul>;
}


export default AnswerOptions;
