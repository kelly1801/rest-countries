import { NavContainer } from "../../styles/styledComponents";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { LightTheme } from "../../styles/themes";
import { CountryContext } from "../../context/countryContext";
import { useContext } from "react";
export const NavBar = () => {
  const { toggleTheme, theme } = useContext(CountryContext);

  return (
    <NavContainer>
      <h1>Where in the world?</h1>

      <div onClick={toggleTheme}>
        {theme === LightTheme ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
        <span>{theme === LightTheme ? "Dark " : "Light"} Mode</span>
      </div>
    </NavContainer>
  );
};
