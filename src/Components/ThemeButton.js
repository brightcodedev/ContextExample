import React,{useContext} from 'react';
import themeStyles from './styles/themeStyles';
import ThemeContext from './ThemeContext';


const ThemeButton = () => {
    let theme = useContext(ThemeContext);

    const handleChangeTheme=()=>{
        let themeArr = Object.keys(themeStyles);
        
        let currentIndex = themeArr.indexOf(theme.currentTheme);
        theme.setCurrentTheme(themeArr[(currentIndex + 1) % themeArr.length])
    }
    return (
        <>
            <div style={themeStyles[theme.currentTheme]}>Something</div>
            <button onClick={handleChangeTheme}>Change Theme</button>
        </>
    )
}

export default ThemeButton;