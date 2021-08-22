import React from "react";
import { NavLink } from "react-router-dom";
import { selectErrorStatus, selectLocation } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { saveTempUnit } from "../redux/actions";
import { useSelector } from "react-redux";

const NavBar = () => {
  const location = useSelector(selectLocation);
  const dispatch = useDispatch();
  const errorStatus = useSelector(selectErrorStatus);

  const checkConditions = (e) => {
    if (!location || errorStatus) {
      e.preventDefault();
      new Notification("Please Enter a Valid Location First!");
    }
  };
  const handleSettingsSave = (input) => {
    dispatch(saveTempUnit(input));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav me-auto">
          <NavLink className="nav-item nav-link" to="/weather">
            Current Weather
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/hourly-forecast"
            onClick={(e) => checkConditions(e)}
          >
            Hourly Forecast
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/daily-forecast"
            onClick={(e) => checkConditions(e)}
          >
            Daily Forecast
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/notification-center"
            onClick={(e) => checkConditions(e)}
          >
            Notification Center
          </NavLink>
        </div>
        <div className="navbar-nav">
          <span>
            <button
              className="medium-fontsize button"
              onClick={() => handleSettingsSave("fahrenheit")}
            >
              F
            </button>
            <span>/</span>
            <button
              className="medium-fontsize button"
              onClick={(e) => handleSettingsSave("celsius")}
            >
              C
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
