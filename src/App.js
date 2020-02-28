import React,{useState} from 'react';
import {Routes} from './Components/Routes';
import ThemeContext from './Components/ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="App">
      <ThemeContext.Provider value={{currentTheme:theme, setCurrentTheme:(themeName)=>setTheme(themeName)}}>
        <Routes/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
