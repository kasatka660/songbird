import React from "react";
import Logo from "./Logo/Logo";
import GameCount from "./GameScore/GameScore";
import Categories from "./Categories/Categories";
import styles from './Header.module.css'

const Header: React.FC<{currentCategory: number, gameScore: number}> = ({currentCategory, gameScore}) => {
    return <header>
            <div className={styles.TopPanel}>
              <Logo/>
              <GameCount gameScore={gameScore}/>
            </div>
            <Categories currentCategory={currentCategory}/>
          </header>;
}


export default Header;
