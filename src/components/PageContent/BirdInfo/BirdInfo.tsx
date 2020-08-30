import React from "react";
import Bird from "../../../assets/images/bird.jpg";
import styles from "./BirdInfo.module.css"

const BirdInfo: React.FC<{nextButtonActive: boolean, currentQuestion: any}> = ({nextButtonActive, currentQuestion}) => {
  return <div className='container page-section'>
            { !nextButtonActive &&
            <div className='row'>
              <div className='col col-5'>
                <img className='bird-image' src={Bird} alt='unknown bird image'/>
              </div>
              <div className='col col-7'>
                <span>Послушате плеер.</span><br/>
                <span>Выберите пицу из списка.</span>
              </div>
            </div>
            }
           { nextButtonActive &&
            <div className='row'>
                <div className='col col-5'>
                  <img className='bird-image' src={currentQuestion.image} alt='bird image'/>
                </div>
                <div className='col col-7'>
                  <h4>{currentQuestion.name}</h4>
                  <span>{currentQuestion.species}</span>
                </div>
                <div className='col col-12'>
                  <p className={styles.BirdText}>{currentQuestion.description} </p>
                </div>
            </div>
            }

        </div>;
}


export default BirdInfo;
