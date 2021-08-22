import React from "react";
import SearchBar from "./searchBar";
import CurrentWeather from "./currentWeather";

const Weather = (props) => {
  return (
    <div className="background-image">
      <SearchBar />
      <CurrentWeather handleIconDisplay={props.handleIconDisplay} handleTemperatureCalculations={props.handleTemperatureCalculations}/>
    </div>
  );
};

export default Weather;
