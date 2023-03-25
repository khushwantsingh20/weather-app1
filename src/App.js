import "./App.css";

import SearchCIty from "./components/SearchCIty";
import WeatherDeails from "./components/WeatherDeails";
function App() {
  return (
    <div className="app">
      <div className="flex justify-end items-center flex-col">
        <h1 className="text-7xl font-bold text-center text-white">Weather </h1>
        <SearchCIty />
        <WeatherDeails />
      </div>
    </div>
  );
}

export default App;
