import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {selectNotificationType, selectNotificationTime, selectLocation} from "../redux/selectors";
import { saveAlertType, saveAlertTime } from "../redux/actions";
const NotificationCenter = () => {
  const dispatch = useDispatch();
  const type = useSelector(selectNotificationType);
  const time = useSelector(selectNotificationTime);
  const location = useSelector(selectLocation);
  const {REACT_APP_API_KEY}=process.env;

  const handleUserInput = (input, field) => {
    if (field === "weather-type") {
      dispatch(saveAlertType(input));
    }
    if (field === "alert-time") {
      dispatch(saveAlertTime(input));
    }
  };

  const createNotification = ({ type, time, location,}) => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const myWorker = new Worker(process.env.PUBLIC_URL+"worker.js");
        myWorker.postMessage({ type, time, location,REACT_APP_API_KEY});
        new Notification("Notification Created Successfully!");
      }
      
    });
  };

  return (
    <div>
      <label htmlFor="weather-type">Select a Weather type for your alert? </label>
      <select
        id="weather-type"
        onChange={(e) => handleUserInput(e.target.value, "weather-type")}
        name="weather-type"
      >
        <option value="">Select a Weather Type</option>
        <option value="Clouds">Clouds</option>
        <option value="Clear">Clear</option>
        <option value="Rain">Rain</option>
        <option value="Snow">Snow</option>
        <option value="Thunderstorm">Thunderstorm</option>
      </select>
      <br />
      <label htmlFor="alert-time">When do you want to be alerted? </label>
      <select
        id="alert-time"
        onChange={(e) => handleUserInput(e.target.value, "alert-time")}
        name="alert-time"
      >
        <option value="">Select a Time</option>
        <option value="5">5 Minutes Before</option>
        <option value="10">10 Minutes Before</option>
        <option value="15">15 Minutes Before</option>
        <option value="30">30 Minutes Before</option>
        <option value="45">45 Minutes Before</option>
      </select>
      <br />
      <button
        disabled={!location || !type || !time}
        onClick={() => createNotification({ type, time, location})}
      >
        Create Notification
      </button>
    </div>
  );
};

export default NotificationCenter;
