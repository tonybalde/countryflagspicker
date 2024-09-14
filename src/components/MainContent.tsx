import React from 'react';
import styles from './MainContent.module.css';

function MainContent({ isDarkMode }) {
  return (
    <div className={`${styles.mainContent} ${isDarkMode ? styles.darkMain : styles.lightMain}`}>
      
            <div className={styles.mainContentContainer}>          
                 <input type="search" placeholder="Search for a country..."></input>
                 <div className={styles.dropdownCountries}>
                     <button className={styles.dropdownButton}>Filter by Region</button>
                     <div className={styles.dropdownContent}>
                     <a href="#item1">Africa</a>
                     <a href="#item2">America</a>
                     <a href="#item3">Asia</a>
                     <a href="#item4">Europe</a>
                     <a href="#item5">Oceania</a>
                     </div>
                 </div>
            </div>
    </div>
  );
}

export default MainContent;