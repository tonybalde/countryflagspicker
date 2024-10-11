// // import React, { useState } from 'react';
// // import './App.css';
// // import Header from "./components/Header";
// // import MainContent from './components/MainContent';

// // function App() {
// //   // State to manage the dark mode
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   // Toggle dark mode
// //   const toggleDarkMode = () => {
// //     setIsDarkMode(!isDarkMode);
// //   };

// //   return (
// //     <div className={isDarkMode ? 'darkModeStyle' : 'lightModeStyle'}>
// //       <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
// //       <MainContent />
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Header from "./components/Header";
// import MainContent from './components/MainContent';

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
//       <MainContent isDarkMode={isDarkMode} />
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <MainContent isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;