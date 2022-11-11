import {createContext, useState} from "react";
import {LightTheme, DarkTheme} from "../styles/themes";

export const CountryContext = createContext({
    theme: LightTheme,
    toggleTheme: () => {}
})

export const CountryProvider = ({children}) => {
const [theme, setTheme] = useState(LightTheme)

    function toggleTheme() {
    setTheme( theme === LightTheme ? DarkTheme : LightTheme )}
const value = {
    theme,
    toggleTheme
}
    return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>;
}