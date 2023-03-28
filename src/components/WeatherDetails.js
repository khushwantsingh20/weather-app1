import React, { useEffect, useState, useCallback } from "react";
import Card from "../shared/Card";
import { currentWeather } from "../services/Service";
const WeatherDetails = (props) => {
  const [cityWeatherDetails, setcityWeatherDetails] = useState("");
  console.log(props.cityDetails);
  const getCityWeatherDetails = useCallback(async (city) => {
    if (city) {
      const data = await currentWeather(city);
      console.log(data);
      setcityWeatherDetails(data.data);
    }
  }, []);

  useEffect(() => {
    getCityWeatherDetails(props.cityDetails.value);
  }, [getCityWeatherDetails, props.cityDetails]);

  return (
    <>
      <Card>
        <div className="flex-col justify-evenly items-center">
          <p className="text-5xl">{cityWeatherDetails?.location?.name}</p>
          <div className="flex justify-center items-center">
            <img
              src={"https:" + cityWeatherDetails?.current?.condition?.icon}
              alt="weather icon"
              className="w-24"
            />
          </div>
          <p className="text-6xl">{cityWeatherDetails?.current?.temp_c} C</p>
          <p>{cityWeatherDetails?.current?.condition?.text}</p>
        </div>
      </Card>
    </>
  );
};

export default WeatherDetails;
