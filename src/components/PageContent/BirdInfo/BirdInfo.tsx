import React from "react";
import Bird from "../../../assets/images/bird.jpg";
import styles from "./BirdInfo.module.css"

const BirdInfo: React.FC = () => {
  return <section className='container page-section'>
          <div className='row'>
            <div className='col col-5'>
              <img className='bird-image' src={Bird}/>
            </div>
            <div className='col col-7'>
                <h4>Ворон</h4>
                <span>Corvus corax</span>
            </div>
            <div className='col col-12'>
              <p className={styles.BirdText}>
                Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров.
                Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день,
                когда черные вороны улетят от Тауэра, монархия рухнет.
                Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров.
                Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день,
                когда черные вороны улетят от Тауэра, монархия рухнет.
              </p>
            </div>
          </div>
        </section>;
}


export default BirdInfo;
