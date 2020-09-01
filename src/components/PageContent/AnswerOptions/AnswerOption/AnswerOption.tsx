import React from "react";
import styles from "./AnswerOption.module.css";
import { QuestionModel } from "../../../../models/Question.model";

const AnswerOption: React.FC<{
  item: QuestionModel;
  listItemColor: Object;
  checkAnswer: (id: number) => void;
}> = ({ item, listItemColor, checkAnswer }) => {
  return (
    <li className={styles.AnswerOption} onClick={() => checkAnswer(item.id)}>
      <span className={styles.ListItemMarker + " " + listItemColor} />
      {item.name}
    </li>
  );
};

export default AnswerOption;
