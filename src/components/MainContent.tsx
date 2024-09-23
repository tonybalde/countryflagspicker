import React, { useState, useRef } from 'react';
import { IoIosSearch, IoIosArrowRoundBack } from 'react-icons/io';
import styles from './MainContent.module.css';
import data from "../../data/data.json";

function MainContent({ isDarkMode }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para búsqueda
  const [selectedCountry, setSelectedCountry] = useState(null); // Estado para país seleccionado
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedCountry(null); // Reinicia el país seleccionado al buscar
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country); // Selecciona el país y oculta la búsqueda
  };

  const handleBackClick = () => {
    setSelectedCountry(null); // Vuelve a la lista general de países
    setSearchTerm(''); // Limpia el término de búsqueda
  };

  // Filtrar países en base al término de búsqueda
  const filteredCountries = data.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Find border country by alpha3Code
  const findCountryByAlpha3Code = (code) => {
    return data.find(country => country.alpha3Code === code);
  };

  return (
    <div className={`${styles.mainContent} ${isDarkMode ? styles.darkMain : styles.lightMain}`}>
      {!selectedCountry ? ( // Mostrar búsqueda y dropdown solo si no hay país seleccionado
        <div className={styles.mainContentContainer}>          
          <div className={styles.inputWrapper}>
            <IoIosSearch className={styles.searchIcon} size={30} />
            <input 
              ref={inputRef}
              type="search" 
              placeholder="Search for a country..." 
              className={`${styles.searchInput} ${isFocused ? styles.focused : ''}`}
              value={searchTerm} // Valor del input ligado al estado
              onChange={handleSearchChange} // Manejar cambio de búsqueda
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
      ) : (
        <button className={styles.backButton} onClick={handleBackClick}>
          <IoIosArrowRoundBack size={20}/>
          Back
        </button>
      )}

      <div>
        {/* Mostrar país seleccionado o la lista filtrada */}
        {selectedCountry ? (
          <div className={styles.countryDetails}>
            <img 
              src={selectedCountry.flags.png} 
              alt={`Flag of ${selectedCountry.name}`}
              className={styles.flagImage}
            />
            <h2>{selectedCountry.name}</h2>
            
            <p><strong>Native Name:</strong> {selectedCountry.nativeName.toLocaleString()}</p>
            <p><strong>Population:</strong> {selectedCountry.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {selectedCountry.region}</p>
            <p><strong>Sub Region:</strong> {selectedCountry.subregion}</p>
            <p><strong>Capital:</strong> {selectedCountry.capital}</p>
              
            <p><strong>Top Level Domain:</strong> {selectedCountry.topLevelDomain.toLocaleString()}</p>
            <p><strong>Currencies:</strong> 
              {selectedCountry.currencies.map(currency => (
                <span key={currency.code}>
                  {currency.name} ({currency.symbol})
                </span>
              ))}
            </p>
            <p><strong>Languages:</strong> 
              {selectedCountry.languages.map(language => (
                <span key={language.iso639_1}>
                  {language.name} ({language.nativeName})
                </span>
              ))}
            </p>
            
            <h2>Border Countries:</h2>  
            <div className={styles.countryBorderContainer}>
            {selectedCountry.borders.length > 0 ? (
              selectedCountry.borders.map((borderCode) => {
                const borderCountry = findCountryByAlpha3Code(borderCode); // Find the full country data
                return (
                  <button 
                    key={borderCode} 
                    onClick={() => handleCountryClick(borderCountry)} // Handle click to display the country
                    className={styles.borderCountryButton}
                  >
                    {borderCountry ? borderCountry.name : borderCode}
                  </button>
                );
              })
            ) : (
              <p>No border countries</p>
            )}
            </div>
          </div>
        ) : (
          <div className={styles.cardsContainer}>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div 
                  key={country.alpha3Code} 
                  className={styles.flagCard}
                  onClick={() => handleCountryClick(country)} // Manejar clic en el país
                >
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
              ))
            ) : (
              <p className={styles.notFound}>Country not found</p> // Mensaje si no encuentra país
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainContent;
