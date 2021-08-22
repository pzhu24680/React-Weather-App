import { useSelector } from "react-redux";
import { selectWeatherData } from "../redux/selectors";
import { useState } from "react";
import _ from "lodash";

const HourlyForecast = (props) => {
  const [time, setTime] = useState("");
  const weather = useSelector(selectWeatherData);

  const calculateAdjustedTimes = (index) => {
    let time = new Date();
    time.setHours(
      time.getHours() +
        Number(index) +
        weather.timezone_offset / 3600 -
        -time.getTimezoneOffset() / 60
    );
    return time.toLocaleString("en-US", { hour: "numeric", hour12: true });
  };
  const getHourlyWeather = (weather) => {
    const hourlyTemperatures = [];
    const hourlyType = [];
    for (const day of weather.hourly) {
      hourlyTemperatures.push(day.temp);
      hourlyType.push(day.weather[0].main);
    }
    const indexOfCurrentWeather = hourlyTemperatures.indexOf(
      weather.current.temp
    );
    const hourlyWeather = _.zip(
      hourlyType.slice(indexOfCurrentWeather),
      hourlyTemperatures.slice(indexOfCurrentWeather)
    );
    return hourlyWeather;
  };
  return (
    <div className="hourly-wrapper background-image">
      {getHourlyWeather(weather)
        .slice(0, 24)
        .map((weather, index) => (
          <div key={"hourly"+index}className="hourly-cell">
            {calculateAdjustedTimes(time + index)}
            <div className="fa-3x">{props.handleIconDisplay(weather[0])}</div>
            <p>{weather[0]}</p>
            <h1>
            {props.handleTemperatureCalculations(weather[1])}
            </h1>
          </div>
        ))}
    </div>
  );
};

export default HourlyForecast;
