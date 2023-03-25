import axios from "axios";

import { API_KEY, API_URL } from "./constant";
export const currentWeather = async (cityname) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${API_URL}/current.json?key=${API_KEY}&q=${cityname}`,
    headers: {},
  };

  const currentwetherdata = await axios(config);

  return currentwetherdata;
};

export const getCityList = async (searchParams) => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: API_URL + "/search.json?key=" + API_KEY + "&q=" + searchParams,
      headers: {},
    };
    const cityList = await axios.request(config);
    return cityList;
  } catch (error) {
    console.error(error);
    return error;
  }
};
