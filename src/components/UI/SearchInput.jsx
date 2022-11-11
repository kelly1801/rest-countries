import { SearchContainer } from "../../styles/styledComponents";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { useContext } from "react";
import { CountryContext } from "../../context/countryContext";
import { requests } from "../../htttpRequests/request";
export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setFetchUrl } = useContext(CountryContext);

  function searchByName(e) {
    const { value } = e.target;
    const url = requests.getCountryByName + value;
    setFetchUrl(url);
  }
  return (
    <SearchContainer onChange={(e) => searchByName(e)}>
      <SearchOutlinedIcon />
      <input type="text" placeholder="Search for a country…" />
    </SearchContainer>
  );
};
