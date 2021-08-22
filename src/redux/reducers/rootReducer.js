import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import sessionStorage from "redux-persist/es/storage/session";
import weatherDataReducer from "./weatherData.reducer";
import settingsReducer from "./settings.reducer";
import notificationsReducer from "./notifications.reducer";
import errorReducer from "./error.reducer";

const rootPersistConfig = {
  key: "root",
  storage: sessionStorage,
};


const rootReducer = combineReducers({
  weatherDataReducer,
  settingsReducer,
  notificationsReducer,
  errorReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
