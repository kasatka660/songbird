import React, { useState} from "react";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import AnswerOptions from "./AnswerOptions/AnswerOptions";
import BirdInfo from "./BirdInfo/BirdInfo";
import NextLevelButton from "./NextLevelButton/NextLevelButton";
import BirdsData from "../../assets/data/BirdsData";
import Header from "../Header/Header";
import CategoryList from "../../assets/const/CategoryList";

const PageContent: React.FC = () => {
  const getRandomQuestion = () => BirdsData[currentCategory][ Math.floor(Math.random() * BirdsData[currentCategory].length)];
  const [currentCategory, setCategory] = useState<number>(CategoryList[0].id);
  const [gameScore, setScore] = useState<number>(0);
  const [nextButtonActive, setNextButtonToActive] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
  const updateScore: (attemptCount: number) => void = (attemptCount) => {
    setNextButtonToActive(true);
    setScore(gameScore+(5-attemptCount));
  }
  const goToNextQuestion = () => {
    setCategory(currentCategory+1);
    setCurrentQuestion(getRandomQuestion());
    setNextButtonToActive(false);
  }
    return <>
              <Header currentCategory={currentCategory} gameScore={gameScore}/>
              <CurrentQuestion currentQuestion={currentQuestion} />
              <div className='row'>
                <div className='col col-6'>
                  <AnswerOptions currentCategory={currentCategory} currentQuestion={currentQuestion} updateScore={updateScore} />
                </div>
                <div className='col col-6'>
                  <BirdInfo nextButtonActive={nextButtonActive} currentQuestion={currentQuestion} />
                </div>
              </div>
              <NextLevelButton nextButtonActive={nextButtonActive} goToNextQuestion={goToNextQuestion}/>
            </>

}

export default PageContent;
