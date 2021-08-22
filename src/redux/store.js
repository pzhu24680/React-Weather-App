import weatherReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import {createStore, combineReducers,applyMiddleware} from 'redux';

const reducers=combineReducers({weatherReducer});
export const store=createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
export default {store, persistor};
