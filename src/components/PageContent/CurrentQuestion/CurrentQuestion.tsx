import React from "react";
import Bird from './../../../assets/images/bird.jpg'
import styles from './CurrentQuestion.module.css';
import AudioPlayer from "../../common/AudioPlayer/AudioPlayer";

const CurrentQuestion: React.FC<{currentQuestion: any, stopAudio: boolean}> = ({currentQuestion, stopAudio}) => {

    return <div className={`container ${styles.CurrentQuestionContainer}`}>
        <div className='row'>
            <div className='col-12 col-md-3 '>
                <img className='bird-image' src={Bird} alt='birdImage'/>
            </div>
            <div className='col-12 col-md-9'>
                <div className={styles.HiddenName}>
                    <span className='text-color'>******</span>
                </div>
                <AudioPlayer audioSrc={currentQuestion.audio} stopAudio={stopAudio}/>
            </div>
        </div>
    </div>;
}


export default CurrentQuestion;
