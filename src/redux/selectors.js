export const selectWeatherData=(state)=>state.weatherReducer.weatherDataReducer.weather;
export const selectLocation=(state)=>state.weatherReducer.weatherDataReducer.location;
export const selectTempUnit=(state)=>state.weatherReducer.settingsReducer.unit;
export const selectNotificationType=(state)=>state.weatherReducer.notificationsReducer.type;
export const selectNotificationTime=(state)=>state.weatherReducer.notificationsReducer.time;
export const selectErrorStatus=(state)=>state.weatherReducer.errorReducer.errorStatus



