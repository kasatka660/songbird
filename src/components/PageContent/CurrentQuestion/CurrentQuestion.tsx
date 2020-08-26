import React from "react";
import Bird from './../../../assets/images/bird.jpg'
import styles from './CurrentQuestion.module.css'

const CurrentQuestion: React.FC = () => {
    return <div className={`container page-section ${styles.CurrentQuestionContainer}`}>
        <div className='row'>
            <div className='col col-3'>
                <img className='bird-image' src={Bird} alt='birdImage'/>
            </div>
            <div className='col col-9'>
                <div className={styles.HiddenName}>
                    <span className='text-color'>******</span>
                </div>

            </div>
        </div>
    </div>;
}


export default CurrentQuestion;
