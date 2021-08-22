

function weatherDataReducer(state = {}, action) {
    switch (action.type) {
      case "WEATHER_REQUEST_SENT":
        return {
          isRequesting: true,
        };
      case "SET_WEATHER_SUCCESS":
        return {
          ...state,
          weather: action.payload,
          isRequesting: false,
        };
      case "SET_LOCATION":
        return {
          ...state,
          location: action.payload,
        };
      default:
        return state;
    }
  }


export default weatherDataReducer;