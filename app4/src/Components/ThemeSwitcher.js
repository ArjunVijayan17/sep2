import React, {useState} from 'react';

function ThemeSwitcher() {
    const [theme, setTheme] = useState("Light");
    function toggletheme(){
        setTheme(theme==="Light"?"Dark":"Light");
    }
    const containerStyle = {
        background: theme=== "Light" ? "#DDF6D2" : "#333456",
        minHeight: "100vh",
        padding:"20px",
    };
  return (
    <div style={containerStyle}><h1>ThemeSwitcher</h1>
    <button onClick={toggletheme}>Switch Mode</button>
    <p>The Current Mode:{theme}</p>
        </div>
  );
}

export default ThemeSwitcher