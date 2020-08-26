import React from "react";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import AnswerOptions from "./AnswerOptions/AnswerOptions";
import BirdInfo from "./BirdInfo/BirdInfo";
import NextLevelButton from "./NextLevelButton/NextLevelButton";

const PageContent: React.FC = () => {
    return <>
              <div className='row'>
                <div className='col col-12'>
                  <CurrentQuestion/>
                </div>
              </div>

              <div className='row'>
                <div className='col col-6'>
                  <AnswerOptions/>
                </div>
                <div className='col col-6'>
                  <BirdInfo/>
                </div>
              </div>

              <div className="row">
                <div className='col col-12'>
                  <NextLevelButton/>
                </div>
              </div>
            </>

}

export default PageContent;
