import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const values = { isSwitchOn, setIsSwitchOn, onToggleSwitch };

  return (
    <ThemeContext.Provider value={values}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
