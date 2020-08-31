import React from "react";
import Bird from './../../../assets/images/bird.jpg'
import styles from './CurrentQuestion.module.css'

const CurrentQuestion: React.FC<{currentQuestion: any}> = ({currentQuestion}) => {

    return <div className={`container ${styles.CurrentQuestionContainer}`}>
        <div className='row'>
            <div className='col col-3'>
                <img className='bird-image' src={Bird} alt='birdImage'/>
            </div>
            <div className='col col-9'>
                <div className={styles.HiddenName}>
                    <span className='text-color'>******</span>
                </div>
                <audio controls hidden>
                    <source src={currentQuestion.audio} type="audio/ogg"/>
                </audio>
            </div>
        </div>
    </div>;
}


export default CurrentQuestion;
