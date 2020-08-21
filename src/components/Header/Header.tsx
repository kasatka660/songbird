import React from "react";
import Logo from "./Logo/Logo";
import GameCount from "./GameScore/GameScore";
import Categories from "./Categories/Categories";
import styles from './Header.module.css'

const Header: React.FC = () => {
    return <header>
            <div className={styles.TopPanel}>
            <Logo/>
            <GameCount score={10}/>
        </div>
            <Categories/>
          </header>;
}


export default Header;
