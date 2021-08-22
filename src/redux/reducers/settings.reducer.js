const defaultState={
    unit:"fahrenheit"
}


function settingsReducer(state=defaultState, action) {
    switch (action.type) {
      case "SET_TEMP_UNIT":
        return {
          ...state,
          unit: action.payload,
        };
      default:
        return state;
    }
  }


export default settingsReducer;