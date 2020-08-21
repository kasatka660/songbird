import React from "react";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import AnswerOptions from "./AnswerOptions/AnswerOptions";
import BirdInfo from "./BirdInfo/BirdInfo";

const PageContent: React.FC = () => {
    return <>
            <CurrentQuestion/>
            <div className='container'>
              <div className='row'>
                <div className='col col-6'>
                  <AnswerOptions/>
                </div>
                <div className='col col-6'>
                  <BirdInfo/>
                </div>
              </div>
            </div>

           </>
}
//Event ID: PIN-9875-ZYGF

export default PageContent;
