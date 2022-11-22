import { createContext, useEffect, useState } from "react";
import { LightTheme, DarkTheme } from "../styles/themes";
import axios from "../htttpRequests/axios";
export const CountryContext = createContext({
  theme: LightTheme,
  flagsCollection: [],
  toggleTheme: () => {},
  setFetchUrl: () => {},
});

export const CountryProvider = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme);
  const [flagsCollection, setFlags] = useState([]);
  const [fetchUrl, setFetchUrl] = useState("/all");

  function toggleTheme() {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  }

  async function fetchData() {
    const response = await axios.get(fetchUrl);
    const countries = response.data;

    setFlags(countries);
  }

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const value = {
    toggleTheme,
    theme,
    flagsCollection,
    setFetchUrl,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};
