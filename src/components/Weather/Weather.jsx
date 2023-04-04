import { useState } from "react";
import WeatherDetails from "../WeatherDetails";
import AsycnSearch from "../AsycnSearch";
const Weather = () => {
  const [cityDetails, setCityDetails] = useState({
    country: "",
    label: "",
    lat: "",
    long: "",
    region: "",
    value: "",
  });
  return (
    <div>
      <div className="flex justify-end items-center flex-col">
        <h1 className="text-7xl font-bold text-center text-white">Weather </h1>
        {/* <SearchCIty setCityDetails={setCityDetails} /> */}
        <AsycnSearch setCityDetails={setCityDetails} />
        {/* {cityDetails.length !== 0 && (
          <WeatherDeails cityDetails={cityDetails} />
        )} */}
        {cityDetails.value && <WeatherDetails cityDetails={cityDetails} />}
      </div>
    </div>
  );
};

export default Weather;
