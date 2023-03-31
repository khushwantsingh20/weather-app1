import React, { useEffect, useState, useCallback } from "react";
import Card from "../shared/Card";
import { currentWeather } from "../services/Service";
import Progress from "../shared/Progress";
const WeatherDetails = (props) => {
  const [cityWeatherDetails, setcityWeatherDetails] = useState("");
  const [toggleLoader, setToggleLoader] = useState(false);
  console.log(props.cityDetails);
  const getCityWeatherDetails = useCallback(async (city) => {
    if (city) {
      try {
        setToggleLoader(true);
        setTimeout(async () => {
          const data = await currentWeather(city);
          setToggleLoader(false);
          console.log(data);
          setcityWeatherDetails(data.data);
        }, 2000);
      } catch (error) {
        console.error(error.message);
        setcityWeatherDetails([]);
      }
    }
  }, []);

  useEffect(() => {
    getCityWeatherDetails(props.cityDetails.value);
  }, [getCityWeatherDetails, props.cityDetails]);

  return (
    <>
      <Card>
        {toggleLoader && <Progress />}
        {!toggleLoader && (
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
        )}
      </Card>
    </>
  );
};

export default WeatherDetails;
