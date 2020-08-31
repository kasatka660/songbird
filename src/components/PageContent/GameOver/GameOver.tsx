import React from "react";
import styles from './GameOver.module.css';
import BirdsData from './../../../assets/data/BirdsData'

const GameOver: React.FC<{restartGame: ()=>void, finalScore: number}> = ({restartGame, finalScore}) => {
  const questionMaxValue = 5;
  const maxGameScore = questionMaxValue*BirdsData.length;
  return <div className={'row py-5 m-0 ' + styles.GameOverContainer }>
          <div className='col col-12'>
            <h2 className='my-2'>Поздравляем!</h2>
            <p className={styles.GameOverText}>Вы прошли викторину и набрали {finalScore} из {maxGameScore} возможных
              баллов</p>
            <hr className='my-4'/>
            {(finalScore === maxGameScore) &&
                <>
              <button className={'my-4 ' + styles.TryAgainButton} onClick={restartGame}>Попробовать еще раз</button></>}
          </div>
        </div>
}

export default GameOver;
