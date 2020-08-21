import React from "react";
import styles from './GameScore.module.css'

const GameScore: React.FC<{score: number}> = ({score}) => {
    return <span className={styles.GameScore}>Score: {score}</span>;
}


export default GameScore;
