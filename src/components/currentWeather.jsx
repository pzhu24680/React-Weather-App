import React from "react";
import { useSelector } from "react-redux";
import {selectWeatherData, selectLocation, selectErrorStatus,} from "../redux/selectors";


const CurrentWeather = (props) => {
  const location = useSelector(selectLocation);
  const weather = useSelector(selectWeatherData);
  const errorStatus = useSelector(selectErrorStatus);
  const { isRequesting } = useSelector(
    (state) => state.weatherReducer.weatherDataReducer
  );
  return (
    <div className="current-wrapper">
      <div className="weather-box">
        {errorStatus === true && <span>An Error has Occured</span>}

        {isRequesting && !errorStatus ? (
          <span>Loading...</span>
        ) : (
          <React.Fragment>
            <h1 className="capitalize">{weather && location.city}</h1>
            <div className="fa-10x">
              {weather &&
                props.handleIconDisplay(weather.current.weather[0].main)}
            </div>
            {weather && (
              <p>
                {props.handleTemperatureCalculations(weather.current.temp)}
              </p>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
export default CurrentWeather;
