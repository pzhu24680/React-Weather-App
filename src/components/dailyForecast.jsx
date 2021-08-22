import { useSelector } from "react-redux";
import { selectWeatherData } from "../redux/selectors";
import _ from "lodash";

const DailyForecast = (props) => {
  const weather = useSelector(selectWeatherData);
  const getDailyForecast = (weather) => {
    const dailyHighs = [];
    const dailyLows = [];
    const dailyType = [];
    for (const day of weather.daily) {
      dailyHighs.push(day.temp.max);
      dailyLows.push(day.temp.min);
      dailyType.push(day.weather[0].main);
    }
    const dailyWeather = _.zip(dailyHighs, dailyLows, dailyType);
    return dailyWeather;
  };
  const calculateDates = (index) => {
    let time = new Date();
    let convertedTime =
      time.getHours() +
      weather.timezone_offset / 3600 -
      -time.getTimezoneOffset() / 60 +
      Number(index);
    convertedTime >= 24
      ? time.setDate(time.getDate() + index + 1)
      : time.setDate(time.getDate() + index);
    return time.toLocaleString("en-us", { weekday: "long" });
  };

  return (
    <div className="daily-wrapper background-image">
      {getDailyForecast(weather).map((weather, index) => (
        <div key={"daily"+index}className="hourly-cell daily-cell">
          <div className="medium-fontsize">{calculateDates(index)}</div>
          <span className="fa-3x">{props.handleIconDisplay(weather[2])}</span>
          <span className="large-fontsize">{weather[2]}</span>
          <span className="bold medium-fontsize">
          {props.handleTemperatureCalculations(weather[0])}
          </span>
          <span>
          {props.handleTemperatureCalculations(weather[1])}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
