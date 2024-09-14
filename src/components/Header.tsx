import React from 'react';
import styles from "./Header.module.css";
import { IoMdMoon } from "react-icons/io";

function Header({ toggleDarkMode, isDarkMode }) {
  return (
    <div className={`${styles.headerContainer} ${isDarkMode ? styles.darkHeader : styles.lightHeader}`}>
      <p className={styles.titleHeader}>Where in the world?</p>
      <div className={styles.darkMode} onClick={toggleDarkMode}>
        <IoMdMoon />
        <p className={styles.darkModeText}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
      </div>
    </div>
  );
}

export default Header;
