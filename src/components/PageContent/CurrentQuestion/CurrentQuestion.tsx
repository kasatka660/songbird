import React from "react";
import Bird from "./../../../assets/images/bird.jpg";
import styles from "./CurrentQuestion.module.css";
import AudioPlayer from "../../common/AudioPlayer/AudioPlayer";
import { QuestionModel } from "../../../models/Question.model";

const CurrentQuestion: React.FC<{
  currentQuestion: QuestionModel;
  stopAudio: boolean;
}> = ({ currentQuestion, stopAudio }) => {
  console.log("Правильный ответ: " + currentQuestion.name);
  return (
    <div className={`container ${styles.CurrentQuestionContainer}`}>
      <div className="row">
        <div className="col-12 col-md-3 ">
          <img className="bird-image" src={Bird} alt="birdImage" />
        </div>
        <div className="col-12 col-md-9">
          <div className={styles.HiddenName}>
            <span className="text-color">******</span>
          </div>
          <AudioPlayer audioSrc={currentQuestion.audio} stopAudio={stopAudio} />
        </div>
      </div>
    </div>
  );
};

export default CurrentQuestion;
