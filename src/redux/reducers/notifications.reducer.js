function notificationsReducer(state = {}, action) {
    switch (action.type) {
      case "SET_ALERT_TYPE":
        return {
          ...state,
          type: action.payload,
        };
      case "SET_ALERT_TIME":
        return {
          ...state,
          time: action.payload,
        };
      default:
        return state;
    }
  }

  export default notificationsReducer;