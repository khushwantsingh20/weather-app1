import React from "react";
import "../css/SubWeather.css";
import { BsWind } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
const SubWeather = () => {
  const dummyData = [
    {
      time_epoch: 1680460200,
      time: "2023-04-03 00:00",
      temp_c: 22.2,
      temp_f: 72,
      is_day: 0,
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        code: 1000,
      },
      wind_mph: 6,
      wind_kph: 9.7,
      wind_degree: 273,
      wind_dir: "W",
      pressure_mb: 1011,
      pressure_in: 29.84,
      precip_mm: 0,
      precip_in: 0,
      humidity: 68,
      cloud: 2,
      feelslike_c: 24.6,
      feelslike_f: 76.3,
      windchill_c: 22.2,
      windchill_f: 72,
      heatindex_c: 24.6,
      heatindex_f: 76.3,
      dewpoint_c: 16.1,
      dewpoint_f: 61,
      will_it_rain: 0,
      chance_of_rain: 0,
      will_it_snow: 0,
      chance_of_snow: 0,
      vis_km: 10,
      vis_miles: 6,
      gust_mph: 7.8,
      gust_kph: 12.6,
      uv: 1,
    },
    {
      time_epoch: 1680463800,
      time: "2023-04-03 01:00",
      temp_c: 21.6,
      temp_f: 70.9,
      is_day: 0,
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        code: 1000,
      },
      wind_mph: 6,
      wind_kph: 9.7,
      wind_degree: 279,
      wind_dir: "W",
      pressure_mb: 1010,
      pressure_in: 29.83,
      precip_mm: 0,
      precip_in: 0,
      humidity: 72,
      cloud: 2,
      feelslike_c: 21.6,
      feelslike_f: 70.9,
      windchill_c: 21.6,
      windchill_f: 70.9,
      heatindex_c: 24.5,
      heatindex_f: 76.1,
      dewpoint_c: 16.2,
      dewpoint_f: 61.2,
      will_it_rain: 0,
      chance_of_rain: 0,
      will_it_snow: 0,
      chance_of_snow: 0,
      vis_km: 10,
      vis_miles: 6,
      gust_mph: 8.1,
      gust_kph: 13,
      uv: 1,
    },
    {
      time_epoch: 1680467400,
      time: "2023-04-03 02:00",
      temp_c: 21,
      temp_f: 69.8,
      is_day: 0,
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        code: 1000,
      },
      wind_mph: 6.3,
      wind_kph: 10.1,
      wind_degree: 290,
      wind_dir: "WNW",
      pressure_mb: 1010,
      pressure_in: 29.82,
      precip_mm: 0,
      precip_in: 0,
      humidity: 74,
      cloud: 3,
      feelslike_c: 21,
      feelslike_f: 69.8,
      windchill_c: 21,
      windchill_f: 69.8,
      heatindex_c: 21,
      heatindex_f: 69.8,
      dewpoint_c: 16.3,
      dewpoint_f: 61.3,
      will_it_rain: 0,
      chance_of_rain: 0,
      will_it_snow: 0,
      chance_of_snow: 0,
      vis_km: 10,
      vis_miles: 6,
      gust_mph: 8.5,
      gust_kph: 13.7,
      uv: 1,
    },
  ];
  return (
    <>
      <div class="flex flex-col w-1/2 font-mono font-bold text-2xl my-2">
        <div class="grid h-10 card bg-base-300 rounded-box place-items-center">
          Hourly Forecast
        </div>
      </div>
      <div class="flex flex-row justify-center items-center w-full">
        {dummyData.map((ele, i) => (
          <div class="basis-1/4 box w-44 h-40 mx-2 py-2 px-4">
            <p className="text-center font-bold text-2xl">{ele.time}</p>
            <span
              className="my-2
            flex justify-center items-center text-center
             "
            >
              <CiTempHigh />
              <span className="mx-2">{"temp " + ele.temp_c + " C"}</span>
            </span>
            <span className=" flex justify-center items-center text-center">
              <BsWind />
              <span className="mx-2">{"wind " + ele.wind_kph}</span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubWeather;
