import { Main, Button } from "../styles/styledComponents";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CountryContext } from "../context/countryContext";
import { requests } from "../htttpRequests/request";
import CountryDetails from "../components/UI/CountryDetails";
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
export const CountryPage = () => {
  const { setFetchUrl, flagsCollection } = useContext(CountryContext);
  const { countryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = requests.getCountryByName + countryName;
    setFetchUrl(url);
  }, []);

  function redirectToHome() {
    setFetchUrl("/all");
    navigate("/");
  }

  return (
    <Main>
      <Button back onClick={redirectToHome}><WestOutlinedIcon/>  Back</Button>

      {
        flagsCollection.map((country, index) => <CountryDetails key={index} country={country} />)
      }
    </Main>
  );
};
