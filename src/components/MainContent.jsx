import { Main, MainHeader, FlagsContainer } from "../styles/styledComponents";
import { SearchInput } from "./UI/SearchInput";
import { Filter } from "./UI/Filter";
import { CountryContext } from "../context/countryContext";
import { useContext } from "react";
import { Country } from "./UI/Country";
const MainContent = () => {
  const { flagsCollection } = useContext(CountryContext);

  return (
    <Main>
      <MainHeader>
        <SearchInput />
        <Filter />
      </MainHeader>
        <FlagsContainer>
          {flagsCollection.map(
            ({ flags, capital, population, region, name, languages }, index) => (
              <Country
                  key={index}
                flag={flags.svg}
                capital={capital}
                population={population}
                region={region}
                countryName={name.common}
              />

              )
          )}
        </FlagsContainer>

    </Main>
  );
};

export default MainContent;
