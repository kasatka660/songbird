import React, {useState} from "react";
import styles from './GameScore.module.css'

const GameScore: React.FC<{gameScore: number}> = ({gameScore}) => {
    return <span className={styles.GameScore}>Score: {gameScore}</span>;
}




export default GameScore;
