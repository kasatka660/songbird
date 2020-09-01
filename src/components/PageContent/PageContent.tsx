import React, { useState} from "react";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import AnswerOptions from "./AnswerOptions/AnswerOptions";
import BirdInfo from "./BirdInfo/BirdInfo";
import NextLevelButton from "./NextLevelButton/NextLevelButton";
import BirdsData from "../../assets/data/BirdsData";
import Header from "../Header/Header";
import CategoryList from "../../assets/const/CategoryList";
import GameOver from "./GameOver/GameOver";

const PageContent: React.FC = () => {

  const getRandomQuestion = () => BirdsData[currentCategory][ Math.floor(Math.random() * BirdsData[currentCategory].length)];

  const [currentCategory, setCategory] = useState<number>(CategoryList[0].id);
  const [gameScore, setScore] = useState<number>(0);
  const [nextButtonActive, setNextButtonToActive] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
  const [gameFinished, setGameToFinish] = useState<boolean>(false);
  const [stopAudio, setAudioState] = useState<boolean>(false)

  const updateScore: (attemptCount: number) => void = (attemptCount) => {
    setAudioState(true);
    setNextButtonToActive(true);
    setScore(gameScore+(5-attemptCount));
  }

  const goToNextQuestion = () => {
    if (currentCategory < BirdsData.length-1) {
      setCategory(currentCategory+1);
      setCurrentQuestion(getRandomQuestion());
      setNextButtonToActive(false);
    } else {
      setGameToFinish(true);
    }
  }

  const restartGame = () => {
    setCategory(CategoryList[0].id);
    setCurrentQuestion(getRandomQuestion());
    setScore(0);
    setGameToFinish(false);
  }

 if (gameFinished) {
    return <>
      <Header currentCategory={currentCategory} gameScore={gameScore}/>
      <GameOver restartGame={restartGame} finalScore={gameScore} />
    </>
 }
return <>
            <Header currentCategory={currentCategory} gameScore={gameScore}/>
            <CurrentQuestion currentQuestion={currentQuestion} stopAudio={stopAudio} />
            <div className='row'>
              <div className='col-12 col-md-6'>
                <AnswerOptions currentCategory={currentCategory} currentQuestion={currentQuestion} updateScore={updateScore} />
              </div>
              <div className='col-12 col-md-6'>
                <BirdInfo nextButtonActive={nextButtonActive} currentQuestion={currentQuestion} />
              </div>
            </div>
            <NextLevelButton nextButtonActive={nextButtonActive} goToNextQuestion={goToNextQuestion}/>
          </>

}

export default PageContent;
