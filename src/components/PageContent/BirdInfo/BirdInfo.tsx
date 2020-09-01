import React from "react";
import styles from "./BirdInfo.module.css";
import AudioPlayer from "../../common/AudioPlayer/AudioPlayer";
import { QuestionModel } from "../../../models/Question.model";

const BirdInfo: React.FC<{
  nextButtonActive: boolean;
  currentQuestion: QuestionModel;
  stopAudio: boolean;
}> = ({ nextButtonActive, currentQuestion, stopAudio }) => {
  return (
    <div className={"container " + styles.BirdInfoSection}>
      {!nextButtonActive && (
        <div className="row">
          <div className="col-12">
            <span>Послушате плеер.</span>
            <br />
            <span>Выберите пицу из списка.</span>
          </div>
        </div>
      )}
      {nextButtonActive && (
        <div className="row">
          <div className="col-12 col-md-5">
            <img
              className="bird-image"
              src={currentQuestion.image}
              alt="bird"
            />
          </div>
          <div className="col-12 col-md-7">
            <h4>{currentQuestion.name}</h4>
            <span className={styles.BirdLatinName}>
              {currentQuestion.species}
            </span>
            <AudioPlayer
              audioSrc={currentQuestion.audio}
              stopAudio={!stopAudio}
            />
          </div>
          <div className="col-12">
            <p className={styles.BirdText}>{currentQuestion.description} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirdInfo;
