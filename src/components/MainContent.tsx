// import React, { useState, useRef, useEffect } from 'react';
// import styles from './MainContent.module.css';
// import { IoIosSearch } from "react-icons/io";


// function MainContent({ isDarkMode }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const inputRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <div className={`${styles.mainContent} ${isDarkMode ? styles.darkMain : styles.lightMain}`}>
//       <div className={styles.mainContentContainer}>          
//         <div className={styles.inputWrapper}>
//           <IoIosSearch className="searchIcon" size={30}/>
//           <input 
//             ref={inputRef}
//             type="search" 
//             placeholder="Search for a country..." 
//             className={`${styles.searchInput} ${isFocused ? styles.focused : ''}`}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//         </div>
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

import React, { useState, useRef } from 'react';
import { IoIosSearch } from 'react-icons/io';
import styles from './MainContent.module.css';
import data from "../../data/data.json";

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
          <IoIosSearch className={styles.searchIcon} size={30} />
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
      <div>
        
        <div className={styles.cardsContainer}>
              {data.map((country) => (
                  <div key={country.alpha3Code} className={styles.flagCard}>
                      <img 
                          src={country.flags.png} 
                          alt={`Flag of ${country.name}`}
                          className={styles.flagImage}
                      />
                      <div className={styles.cardContent}>
                          <h2 className={styles.countryName}>{country.name}</h2>
                          <div className={styles.countryData}>
                            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Capital:</strong> {country.capital}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
        


      </div>
    </div>
  );
}

export default MainContent;