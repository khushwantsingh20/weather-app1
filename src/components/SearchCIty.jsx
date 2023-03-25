import React, { useState, useEffect } from "react";
import Input from "../shared/Input";
import { getCityList } from "../services/Service";
import { debounce } from "lodash";
import CityList from "./CityList";
import Select from "react-select";

const SearchCIty = () => {
  const [cityList, setCityList] = useState([]);
  // const onSearchCityHandler = debounce(async (city) => {
  //   console.log({ city });
  //   if (city) {
  //     const data = await currentWeather(city);
  //     console.log(data);
  //     setcityweather(data.data.current.condition.text);
  //   }
  // }, 2000);
  const aquaticCreatures = [
    { label: "Shark", value: "Shark" },
    { label: "Dolphin", value: "Dolphin" },
    { label: "Whale", value: "Whale" },
    { label: "Octopus", value: "Octopus" },
    { label: "Crab", value: "Crab" },
    { label: "Lobster", value: "Lobster" },
  ];

  const onSearchCityHandler = debounce(async (searchParams) => {
    console.log({ searchParams });
    try {
      const cityListData = await getCityList(searchParams);
      console.log(cityListData);
      setCityList(cityListData.data);
    } catch (error) {
      console.error(error);
      setCityList([]);
    }
  }, 1000);

  useEffect(() => {
    console.log(cityList);
  }, [cityList]);

  const onChangeHandler = (e) => {
    console.log("sdsd", e);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="enter your city name"
        onChange={onSearchCityHandler}
      />
      <CityList list={cityList} />
      <Select onChange={onChangeHandler} options={aquaticCreatures} />
    </>
  );
};

export default SearchCIty;
