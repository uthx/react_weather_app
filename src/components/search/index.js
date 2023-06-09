import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { getCityInfo } from "../../api";
import { formatCityData } from "../utils";
const Search = ({ handleSelectedCity }) => {
  const [search, setSearch] = useState(null);
  const handleChange = (searchData) => {
    console.log({ searchData });
    setSearch(searchData);
    handleSelectedCity(searchData);
  };
  const loadOptions = async (searchInput) => {
    try {
      const { data: respData } = await getCityInfo(searchInput);
      return formatCityData(respData);
    } catch (error) {
      console.log("loadOptions error", error);
      throw new Error(`loadOptions error: ${error}`);
    }
  };
  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
