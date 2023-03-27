import React from "react";

import { getCityList, currentWeather } from "../services/Service";

import { AsyncPaginate } from "react-select-async-paginate";

const SearchCIty = (props) => {
  const loadOptions = async (inputValue, array) => {
    // console.log({ inputValue });
    let data = [];
    if (inputValue) {
      data = await getCityList(inputValue);
    }
    // console.log(data);
    const obj = {
      options: data,
    };
    return obj;
  };
  const getSelectedValue = async (e) => {
    const currentWeatherData = await currentWeather(e.value);
    props.setCityDetails(currentWeatherData.data);
  };
  return (
    <>
      <AsyncPaginate
        loadOptions={loadOptions}
        onChange={getSelectedValue}
        debounceTimeout={600}
      />
    </>
  );
};

export default SearchCIty;
