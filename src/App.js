import {NavBar} from "./components/UI/NavBar";
import {ThemeProvider} from "styled-components";
import {CountryContext} from "./context/countryContext";
import {useContext} from "react";
function App() {
    const {theme} = useContext(CountryContext);
    return (
      <ThemeProvider theme={theme}>
          <NavBar/>
      </ThemeProvider>

  );
}

export default App;
