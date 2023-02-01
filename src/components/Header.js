import React from "react";

function Header({isDarkMode, setIsDarkMode, onDarkModeClick}) {

    // function onDarkModeClick() {
    //     setIsDarkMode((isDarkMode) => !isDarkMode);
    //   }

    return(
        <>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </>
    );
}
export default Header;

//click the button inside of header to toggle dark mode on and off 