// import React from 'react';
// import styles from './MainContent.module.css';

// function MainContent({ isDarkMode }) {
//   return (
//     <div className={`${styles.mainContent} ${isDarkMode ? styles.darkMain : styles.lightMain}`}>
      
//             <div className={styles.mainContentContainer}>          
//                  <input type="search" placeholder="Search for a country..."></input>
//                  <div className={styles.dropdownCountries}>
//                      <button className={styles.dropdownButton}>Filter by Region</button>
//                      <div className={styles.dropdownContent}>
//                      <a href="#item1">Africa</a>
//                      <a href="#item2">America</a>
//                      <a href="#item3">Asia</a>
//                      <a href="#item4">Europe</a>
//                      <a href="#item5">Oceania</a>
//                      </div>
//                  </div>
//             </div>
//     </div>
//   );
// }

// export default MainContent;
// import React, { useState } from 'react';
// import styles from './MainContent.module.css';

// function MainContent({ isDarkMode }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className={`${styles.mainContent} ${isDarkMode ? styles.darkMain : styles.lightMain}`}>
//       <div className={styles.mainContentContainer}>          
//         <input type="search" placeholder="Search for a country..." className={styles.searchInput}></input>
//         <div className={styles.dropdownCountries}>
//           <button className={styles.dropdownButton} onClick={toggleDropdown}>
//             Filter by Region
//           </button>
//           {isDropdownOpen && (
//             <div className={styles.dropdownContent}>
//               <a href="#item1">Africa</a>
//               <a href="#item2">America</a>
//               <a href="#item3">Asia</a>
//               <a href="#item4">Europe</a>
//               <a href="#item5">Oceania</a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainContent;

import React, { useState, useRef, useEffect } from 'react';
import styles from './MainContent.module.css';

function MainContent({ isDarkMode }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`${styles.mainContent} ${isDarkMode ? styles.darkMain : styles.lightMain}`}>
      <div className={styles.mainContentContainer}>          
        <div className={styles.inputWrapper}>
          <input 
            ref={inputRef}
            type="search" 
            placeholder="Search for a country..." 
            className={`${styles.searchInput} ${isFocused ? styles.focused : ''}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.dropdownCountries}>
          <button className={styles.dropdownButton} onClick={toggleDropdown}>
            Filter by Region
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdownContent}>
              <a href="#item1">Africa</a>
              <a href="#item2">America</a>
              <a href="#item3">Asia</a>
              <a href="#item4">Europe</a>
              <a href="#item5">Oceania</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainContent;