import React from "react";
import Logo from "./Logo/Logo";
import Categories from "./Categories/Categories";
import styles from './Header.module.css';
import GameScore from "./GameScore/GameScore";

const Header: React.FC<{currentCategory: number, gameScore: number}> = ({currentCategory, gameScore}) => {
    return <header>
            <div className={styles.TopPanel}>
              <Logo/>
              <GameScore gameScore={gameScore}/>
            </div>
            <Categories currentCategory={currentCategory}/>
          </header>;
}


export default Header;
