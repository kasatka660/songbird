import React from "react";
import styles from "./AnswerOption.module.css";

const AnswerOption: React.FC<{item: any, listItemColor: any, checkAnswer: (id: number)=>void}> = ({item, listItemColor, checkAnswer}) => {
  return  <li className={styles.AnswerOption} onClick={()=>checkAnswer(item.id)}>
            <span className={styles.ListItemMarker + ' ' + listItemColor} />{item.name}
          </li>
}

export default AnswerOption;
