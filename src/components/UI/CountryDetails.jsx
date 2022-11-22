import { DetailsContainer, InfoContainer, Button , GroupButtons} from "../../styles/styledComponents";
import {useContext} from "react";
import {CountryContext} from "../../context/countryContext";
import {requests} from "../../htttpRequests/request";
const CountryDetails = ({ country }) => {
  const {
    flags,
    name,
    population,
    region,
    capital,
    tld,
    subregion,
    languages,
    currencies,
      borders
  } = country;

    const { setFetchUrl } = useContext(CountryContext);


function goToCountry(item) {

        const url = requests.getCountryByCode + item ;
        setFetchUrl(url);


    }

  return (
    <DetailsContainer>
      <figure>
        <img src={flags.svg} alt="" />
      </figure>

      <InfoContainer>
        <h1>{name.common}</h1>
        <div>
          <span>Native Name : {name.official}</span>
          <span>Population: {population}</span>
          <span>Region: {region}</span>
          <span>Subregion: {subregion}</span>
          <span>Capital: {capital}</span>
          <span>Top level domain: {tld}</span>
          <span>
Languages:
            {languages && Object.keys(languages).map((obj) => <span> {languages[obj]} </span>)}
          </span>
          <span>
            Currencies:
            {currencies && Object.keys(currencies).map((obj) => <span> {[currencies[obj].name].join(', ')} </span>)}
          </span>


        </div>
          {borders && <GroupButtons>
              Border Countries:

              {borders.map((item) => <Button onClick={() => goToCountry(`${item}`)}>{item}</Button>)

              }
          </GroupButtons>}
      </InfoContainer>
    </DetailsContainer>
  );
};

export default CountryDetails;
