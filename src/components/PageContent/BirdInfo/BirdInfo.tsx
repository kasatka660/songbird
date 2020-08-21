import React from "react";
import Bird from "../../../assets/images/bird.jpg";

const BirdInfo: React.FC = () => {
  return <section className='container'>
          <div className='row'>
            <div className='col col-5'>
              <img className='bird-image' src={Bird}/>
            </div>
            <div className='col col-7'>
                <h4>Ворон</h4>
                <span>Corvus corax</span>
            </div>
            <div className='col col-12'>
              <p>
                Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров.
                Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день,
                когда черные вороны улетят от Тауэра, монархия рухнет.
              </p>
            </div>
          </div>
        </section>;
}


export default BirdInfo;
