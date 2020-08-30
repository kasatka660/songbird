import React, {useEffect, useState} from "react";
import styles from './AnswerOptions.module.css';
import BirdsData from './../../../assets/data/BirdsData';
import AnswerOption from "./AnswerOption/AnswerOption";

const AnswerOptions: React.FC<{currentCategory: number, currentQuestion: any, updateScore: (attemptCount: number)=>void  }> =
  ({currentCategory, currentQuestion, updateScore}) => {
    const [answeredOptions, setAnsweredOptions] = useState<number[]>([]);
    useEffect(()=>{
      setAnsweredOptions([])
    }, [currentQuestion])
    let attemptCount = 0;
    const checkAnswer = (id: number) => {
      if (answeredOptions.includes(id) || answeredOptions.includes(currentQuestion.id)) {
        return;
      }
      setAnsweredOptions(answeredOptions.concat(id).slice());
      if (id !== currentQuestion.id) {
        attemptCount += 1;
      } else {
        updateScore(attemptCount);
      }
    }
    const getListItemColor = (id: number) => {
      if (answeredOptions.includes(id) ) {
        if (id === currentQuestion.id) {
          return styles.ListItemMarkerCorrect;
        }
        return styles.ListItemMarkerIncorrect;
      }
      return '';
    }

    return <ul className={`text-color ${styles.AnswerOptionList}`} >
      {BirdsData[currentCategory].map((item, key)=>
        <AnswerOption item={item} key={key} listItemColor={getListItemColor(item.id)} checkAnswer={checkAnswer}/>)}
           </ul>
}


export default AnswerOptions;
