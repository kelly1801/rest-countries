import {
  CountryContainer,
  CountryDescription,
} from "../../styles/styledComponents";

import { useNavigate } from "react-router-dom";

export const Country = ({ population, region, capital, flag, countryName }) => {
  const navigate = useNavigate();
  function goToCountryDetails() {
    navigate(`${countryName}`);
  }

  return (
    <CountryContainer onClick={goToCountryDetails}>
      <img src={flag} alt={`flag of ${countryName}`} />
      <CountryDescription>
        <h3>{countryName}</h3>
        <span>Population: {population}</span>
        <span>Region: {region}</span>
        <span>Capital: {capital}</span>
      </CountryDescription>
    </CountryContainer>
  );
};
