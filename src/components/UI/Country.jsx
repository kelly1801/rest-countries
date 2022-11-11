import {
  CountryContainer,
  CountryDescription,
} from "../../styles/styledComponents";
export const Country = ({ population, region, capital, flag, countryName }) => {
  return (
    <CountryContainer>
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
