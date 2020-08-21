import React from "react";
import logoImage from './../../../assets/logo/logo.svg';
import styles from './Logo.module.css';

const Logo: React.FC = () => {
    return <img className={styles.LogoImage} src={logoImage} alt='logo'/>;
}


export default Logo;
