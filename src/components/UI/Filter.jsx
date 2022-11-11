import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { FilterContainer, FilterHeader } from "../../styles/styledComponents";
import { useContext } from "react";
import { CountryContext } from "../../context/countryContext";
import { requests } from "../../htttpRequests/request";

export const Filter = () => {
  const { setFetchUrl } = useContext(CountryContext);

  function filterByRegion(e) {
    const { value } = e.target;
    const url = requests.getCountryByRegion + value;
    setFetchUrl(url);
  }
  return (
    <FilterContainer>
      <FilterHeader>
        Filter by region <KeyboardArrowDownOutlinedIcon />
      </FilterHeader>

      <div onClick={(e) => filterByRegion(e)}>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </div>
    </FilterContainer>
  );
};
