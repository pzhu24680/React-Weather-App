function errorReducer(state = {}, action) {
    switch (action.type) {
      case "SET_WEATHER_FAILURE":
        return {
          ...state,
          errorStatus: true,
          errorMessage: action.errorMessage,
        };
      case "SET_WEATHER_SUCCESS":
        return {
          errorStatus: false,
          errorMessage: null,
        };
      default:
        return state;
    }
  }
export default errorReducer;