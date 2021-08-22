import "./App.css";

import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Weather from "./components/weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import NotFound from "./components/notFound";
import HourlyForecast from "./components/hourlyForecast";
import DailyForecast from "./components/dailyForecast";
import NavBar from "./components/navBar";
import NotificationCenter from "./components/notificationCenter";
import { floor } from "lodash";
import { selectTempUnit } from "./redux/selectors";
import { useSelector } from "react-redux";

const App = () => {
  const unit = useSelector(selectTempUnit);
  const handleIconDisplay = (data) => {
    switch (data) {
      case "Clouds":
        return <FontAwesomeIcon icon="cloud" className="cloud" />;
      case "Rain":
        return <FontAwesomeIcon icon="cloud-showers-heavy" className="cloud" />;
      case "Clear":
        return <FontAwesomeIcon icon="sun" className="sun" />;
      case "Thunderstorm":
        return <FontAwesomeIcon icon="bolt" />;
      case "Snow":
        return <FontAwesomeIcon icon="snowflake" />;
      case "Smoke":
        return <FontAwesomeIcon icon="smog" />;
      case "Drizzle":
        return <FontAwesomeIcon icon="cloud-rain" className="cloud" />;
    }
  };
  const handleTemperatureCalculations = (temperature) => {
      return unit === "fahrenheit"
        ? floor((temperature - 273.15) * (9 / 5) + 32) + "°F"
        : floor(temperature - 273.15) + "°C";
  };
  return (
    <React.Fragment>
      <HashRouter>
        <NavBar />
        <Switch>
          <Route
            path="/weather"
            render={() => (
              <Weather
                handleIconDisplay={handleIconDisplay}
                handleTemperatureCalculations={handleTemperatureCalculations}
              />
            )}
          ></Route>
          <Route
            path="/hourly-forecast"
            render={() => (
              <HourlyForecast handleIconDisplay={handleIconDisplay} handleTemperatureCalculations={handleTemperatureCalculations} />
            )}
          ></Route>
          <Route
            path="/daily-forecast"
            render={() => (
              <DailyForecast handleIconDisplay={handleIconDisplay} handleTemperatureCalculations={handleTemperatureCalculations}/>
            )}
          ></Route>
          <Route
            path="/notification-center"
            component={NotificationCenter}
          ></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/weather" />
          <Redirect to="/not-found" />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;
