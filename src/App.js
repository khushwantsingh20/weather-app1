import "./App.css";

import SearchCIty from "./components/SearchCIty";
import WeatherDeails from "./components/WeatherDeails";
import { useState } from "react";
function App() {
  const [cityDetails, setCityDetails] = useState([]);
  return (
    <div className="app">
      <div className="flex justify-end items-center flex-col">
        <h1 className="text-7xl font-bold text-center text-white">Weather </h1>
        <SearchCIty setCityDetails={setCityDetails} />
        {cityDetails.length !== 0 && (
          <WeatherDeails cityDetails={cityDetails} />
        )}
      </div>
    </div>
  );
}

export default App;
