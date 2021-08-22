import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun ,faCloud, faCloudShowersHeavy, faSearch, faCog, faBolt, faSnowflake, faSmog ,faCloudRain} from '@fortawesome/free-solid-svg-icons'
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "./redux/store";
import { Provider } from 'react-redux';



library.add(faSun, faCloud, faCloudShowersHeavy, faSearch, faCog, faBolt, faSnowflake, faSmog, faCloudRain);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
,
  document.getElementById('root')
);

reportWebVitals();
