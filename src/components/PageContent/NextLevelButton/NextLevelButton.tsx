import React from "react";
import styles from './NextLevelButton.module.css'

const NextLevelButton: React.FC<{nextButtonActive: boolean, goToNextQuestion: ()=>void }> = ({nextButtonActive, goToNextQuestion}) => {
  const toNextQuestionHandler = () => goToNextQuestion();
  return <button className={styles.NextLevelButton + ' ' + (nextButtonActive ?  styles.NextLevelButtonActive : '')}
                 onClick={nextButtonActive? toNextQuestionHandler : ()=>{}}>Next Level</button>
}

export default NextLevelButton;
