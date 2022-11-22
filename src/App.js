import {NavBar} from "./components/UI/NavBar";
import {ThemeProvider} from "styled-components";
import {CountryContext} from "./context/countryContext";
import {useContext} from "react";
import MainContent from "./components/MainContent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CountryPage} from "./pages/CountryPage";
function App() {
    const {theme} = useContext(CountryContext);
    return (
      <ThemeProvider theme={theme}>
          <NavBar/>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<MainContent/>}/>
                  <Route path=':countryName' element={<CountryPage/>}/>
              </Routes>
          </BrowserRouter>

      </ThemeProvider>

  );
}

export default App;
