import http from "../services/httpRequests"
const {REACT_APP_API_KEY}=process.env;
export const loadWeather=(city,country,state='')=>{
    return (dispatch)=>{
        dispatch({type:"WEATHER_REQUEST_SENT",})
        return http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${REACT_APP_API_KEY}`)
        .then(response=>{return http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=${REACT_APP_API_KEY}`)})
        .then(response=>{dispatch(setWeatherSuccess(response.data))})
        .catch((error)=>{dispatch(setWeatherFailure(error))})
    }
}

export const setWeatherSuccess=(weather)=>{
    return{
        type:'SET_WEATHER_SUCCESS',
        payload:weather
    }
}

export const setWeatherFailure=(error)=>{
    return{
        type:'SET_WEATHER_FAILURE',
        errorMessage:error.message
    }
}

export const setLocation=(city,country,state=null)=>{
    return{
        type:"SET_LOCATION",
        payload:{city,country,state}
    }
}

export const saveTempUnit=(unit)=>{
    return{
        type:"SET_TEMP_UNIT",
        payload:unit
    }
}
export const saveAlertType=(type)=>{
    return{
        type:"SET_ALERT_TYPE",
        payload:type
    }
}
export const saveAlertTime=(time)=>{
    return{
        type:"SET_ALERT_TIME",
        payload:time
    }
}


