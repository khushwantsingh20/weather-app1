import axios from "axios";

import { API_URL } from "./constant";
export const currentWeather = async (cityname) => {
  // const config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: `${API_URL}/forecast.json?key=${API_KEY}&q=${cityname}`,
  //   headers: {},
  // };

  // const currentwetherdata = await axios(config);

  return [];
};

export const getCityList = async (searchParams) => {
  try {
    const config = {
      method: "get",
      url: API_URL + `/getCity?searchcity=${searchParams}`,
    };
    const cityList = await axios.request(config);
    return cityList;
  } catch (error) {
    console.error(error);
    return error;
  }
};
