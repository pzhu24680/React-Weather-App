async function getFutureWeatherTypes(API_KEY, city, country, state = "") {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${API_KEY}`
  ).then((promise) => promise.json());
  const detailedData = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}`
  ).then((promise) => promise.json());

  const futureWeatherTypes = [];
  const futureWeatherTemps = [];
  for (let hour of detailedData.hourly) {
    futureWeatherTypes.push(hour.weather[0].main);
    futureWeatherTemps.push(hour.temp);
  }
  const indexOfCurrentWeather = futureWeatherTemps.indexOf(detailedData.current.temp);
  return futureWeatherTypes.slice(indexOfCurrentWeather + 1,indexOfCurrentWeather+24);
}

function showNotification(targetType, remindMeIn) {
  setTimeout(() => {
    new Notification(`Weather Alert: ${targetType}`);
  }, remindMeIn);
}

function closeWebWorker(remindMeIn) {
  setTimeout(() => close(), remindMeIn + 1000);
}

function calculateTimetoNotification(futureWeatherTypes,targetType,targetTime) {
  let hoursToNotification = futureWeatherTypes.indexOf(targetType) + 1;
  let currentMinutes = new Date().getMinutes();
  if (hoursToNotification === 0) {
    return null;
  }
  let remindMeIn =
    hoursToNotification === 1 && targetTime > 60 - currentMinutes
      ? 1
      : hoursToNotification * 3600000 -
        currentMinutes * 60000 -
        targetTime * 60000;
  return remindMeIn;
}

async function setNotificationTime(e) {
  let futureWeatherTypes = await getFutureWeatherTypes(e.data.REACT_APP_API_KEY,e.data.location.city,e.data.location.country,e.data.location.state);
  let remindMeIn = calculateTimetoNotification(futureWeatherTypes,e.data.type,e.data.time);
  if (remindMeIn <= 1800000 && remindMeIn > 0) {
    showNotification(e.data.type, remindMeIn);
    closeWebWorker(remindMeIn);
  }
}
onmessage = async (e) => {
  setNotificationTime(e);
  setInterval(() => setNotificationTime(e), 1800000);
};
