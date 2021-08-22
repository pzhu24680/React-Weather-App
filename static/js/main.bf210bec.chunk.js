(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),i=n.n(r),o=(n(52),n(53),n(17)),s=n(5),u=n(18),l=n(13),j=n(21),d=n.n(j),b={get:d.a.get,delete:d.a.delete,post:d.a.post,put:d.a.put},h="822d855114f668d86cf12cdd9557e9bb",O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(a){return a({type:"WEATHER_REQUEST_SENT"}),b.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,",").concat(n,",").concat(t,"&appid=").concat(h)).then((function(e){return b.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.data.coord.lat,"&lon=").concat(e.data.coord.lon,"&appid=").concat(h))})).then((function(e){a(p(e.data))})).catch((function(e){a(f(e))}))}},p=function(e){return{type:"SET_WEATHER_SUCCESS",payload:e}},f=function(e){return{type:"SET_WEATHER_FAILURE",errorMessage:e.message}},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"SET_LOCATION",payload:{city:e,country:t,state:n}}},x=n(4),v=n(29),y=n.n(v),g=n(0),T=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),o=i[0],s=i[1],j=Object(a.useState)(""),d=Object(u.a)(j,2),b=d[0],h=d[1],p=Object(x.b)(),f=Object.keys(y.a.countries),v=Object.values(y.a.countries).map((function(e){return e.name}));return Object(g.jsxs)("div",{className:"search-bar",children:[Object(g.jsx)("input",{type:"text",id:"name",placeholder:"City",name:"query",onChange:function(e){return c(e.currentTarget.value)}}),Object(g.jsx)("input",{list:"countries",type:"text",id:"country",placeholder:"Country",onChange:function(e){return s(e.currentTarget.value.toLowerCase())}}),Object(g.jsx)("datalist",{id:"countries",children:v.map((function(e){return Object(g.jsx)("option",{value:e},e)}))}),"united states"===o?Object(g.jsxs)("span",{children:[Object(g.jsx)("input",{className:"search-bar1",list:"states",type:"text",id:"state",placeholder:"State",onChange:function(e){return h(e.currentTarget.value)}}),Object(g.jsx)("datalist",{id:"states",children:["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VT","VA","VI","WA","WV","WI","WY"].map((function(e){return Object(g.jsx)("option",{value:e},e)}))})]}):null,Object(g.jsx)("button",{type:"submit",onClick:function(){return function(e,t,n){var a=f[v.map((function(e){return e.toLowerCase()})).indexOf(t)];"united states"!==t?(p(O(e,a)),p(m(e,a))):(p(O(e,a,n)),p(m(e,a,n)))}(n,o,b)},children:Object(g.jsx)(l.a,{icon:"search"})})]})},w=function(e){return e.weatherReducer.weatherDataReducer.weather},N=function(e){return e.weatherReducer.weatherDataReducer.location},E=function(e){return e.weatherReducer.settingsReducer.unit},C=function(e){return e.weatherReducer.notificationsReducer.type},S=function(e){return e.weatherReducer.notificationsReducer.time},R=function(e){return e.weatherReducer.errorReducer.errorStatus},_=function(e){var t=Object(x.c)(N),n=Object(x.c)(w),a=Object(x.c)(R),r=Object(x.c)((function(e){return e.weatherReducer.weatherDataReducer})).isRequesting;return Object(g.jsx)("div",{className:"current-wrapper",children:Object(g.jsxs)("div",{className:"weather-box",children:[!0===a&&Object(g.jsx)("span",{children:"An Error has Occured"}),r&&!a?Object(g.jsx)("span",{children:"Loading..."}):Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)("h1",{className:"capitalize",children:n&&t.city}),Object(g.jsx)("div",{className:"fa-10x",children:n&&e.handleIconDisplay(n.current.weather[0].main)}),n&&Object(g.jsx)("p",{children:e.handleTemperatureCalculations(n.current.temp)})]})]})})},A=function(e){return Object(g.jsxs)("div",{className:"background-image",children:[Object(g.jsx)(T,{}),Object(g.jsx)(_,{handleIconDisplay:e.handleIconDisplay,handleTemperatureCalculations:e.handleTemperatureCalculations})]})},D=(n(43),function(){return Object(g.jsx)("h1",{children:"Page Not Found"})}),I=n(24),M=n(15),k=n.n(M),L=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=(n[1],Object(x.c)(w)),i=function(e){var t=new Date;return t.setHours(t.getHours()+Number(e)+r.timezone_offset/3600- -t.getTimezoneOffset()/60),t.toLocaleString("en-US",{hour:"numeric",hour12:!0})};return Object(g.jsx)("div",{className:"hourly-wrapper background-image",children:function(e){var t,n=[],a=[],c=Object(I.a)(e.hourly);try{for(c.s();!(t=c.n()).done;){var r=t.value;n.push(r.temp),a.push(r.weather[0].main)}}catch(o){c.e(o)}finally{c.f()}var i=n.indexOf(e.current.temp);return k.a.zip(a.slice(i),n.slice(i))}(r).slice(0,24).map((function(t,n){return Object(g.jsxs)("div",{className:"hourly-cell",children:[i(c+n),Object(g.jsx)("div",{className:"fa-3x",children:e.handleIconDisplay(t[0])}),Object(g.jsx)("p",{children:t[0]}),Object(g.jsx)("h1",{children:e.handleTemperatureCalculations(t[1])})]},"hourly"+n)}))})},F=function(e){var t=Object(x.c)(w),n=function(e){var n=new Date;return n.getHours()+t.timezone_offset/3600- -n.getTimezoneOffset()/60+Number(e)>=24?n.setDate(n.getDate()+e+1):n.setDate(n.getDate()+e),n.toLocaleString("en-us",{weekday:"long"})};return Object(g.jsx)("div",{className:"daily-wrapper background-image",children:function(e){var t,n=[],a=[],c=[],r=Object(I.a)(e.daily);try{for(r.s();!(t=r.n()).done;){var i=t.value;n.push(i.temp.max),a.push(i.temp.min),c.push(i.weather[0].main)}}catch(o){r.e(o)}finally{r.f()}return k.a.zip(n,a,c)}(t).map((function(t,a){return Object(g.jsxs)("div",{className:"hourly-cell daily-cell",children:[Object(g.jsx)("div",{className:"medium-fontsize",children:n(a)}),Object(g.jsx)("span",{className:"fa-3x",children:e.handleIconDisplay(t[2])}),Object(g.jsx)("span",{className:"large-fontsize",children:t[2]}),Object(g.jsx)("span",{className:"bold medium-fontsize",children:e.handleTemperatureCalculations(t[0])}),Object(g.jsx)("span",{children:e.handleTemperatureCalculations(t[1])})]},"daily"+a)}))})},W=function(){var e=Object(x.c)(N),t=Object(x.b)(),n=Object(x.c)(R),a=function(t){e&&!n||(t.preventDefault(),new Notification("Please Enter a Valid Location First!"))},c=function(e){t({type:"SET_TEMP_UNIT",payload:e})};return Object(g.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(g.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:[Object(g.jsxs)("div",{className:"navbar-nav me-auto",children:[Object(g.jsx)(o.b,{className:"nav-item nav-link",to:"/weather",children:"Current Weather"}),Object(g.jsx)(o.b,{className:"nav-item nav-link",to:"/hourly-forecast",onClick:function(e){return a(e)},children:"Hourly Forecast"}),Object(g.jsx)(o.b,{className:"nav-item nav-link",to:"/daily-forecast",onClick:function(e){return a(e)},children:"Daily Forecast"}),Object(g.jsx)(o.b,{className:"nav-item nav-link",to:"/notification-center",onClick:function(e){return a(e)},children:"Notification Center"})]}),Object(g.jsx)("div",{className:"navbar-nav",children:Object(g.jsxs)("span",{children:[Object(g.jsx)("button",{className:"medium-fontsize button",onClick:function(){return c("fahrenheit")},children:"F"}),Object(g.jsx)("span",{children:"/"}),Object(g.jsx)("button",{className:"medium-fontsize button",onClick:function(e){return c("celsius")},children:"C"})]})})]})})},z=function(){var e=Object(x.b)(),t=Object(x.c)(C),n=Object(x.c)(S),a=Object(x.c)(N),c=function(t,n){"weather-type"===n&&e(function(e){return{type:"SET_ALERT_TYPE",payload:e}}(t)),"alert-time"===n&&e(function(e){return{type:"SET_ALERT_TIME",payload:e}}(t))};return Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"weather-type",children:"Select a Weather type for your alert? "}),Object(g.jsxs)("select",{id:"weather-type",onChange:function(e){return c(e.target.value,"weather-type")},name:"weather-type",children:[Object(g.jsx)("option",{value:"",children:"Select a Weather Type"}),Object(g.jsx)("option",{value:"Clouds",children:"Clouds"}),Object(g.jsx)("option",{value:"Clear",children:"Clear"}),Object(g.jsx)("option",{value:"Rain",children:"Rain"}),Object(g.jsx)("option",{value:"Snow",children:"Snow"}),Object(g.jsx)("option",{value:"Thunderstorm",children:"Thunderstorm"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"alert-time",children:"When do you want to be alerted? "}),Object(g.jsxs)("select",{id:"alert-time",onChange:function(e){return c(e.target.value,"alert-time")},name:"alert-time",children:[Object(g.jsx)("option",{value:"",children:"Select a Time"}),Object(g.jsx)("option",{value:"5",children:"5 Minutes Before"}),Object(g.jsx)("option",{value:"10",children:"10 Minutes Before"}),Object(g.jsx)("option",{value:"15",children:"15 Minutes Before"}),Object(g.jsx)("option",{value:"30",children:"30 Minutes Before"}),Object(g.jsx)("option",{value:"45",children:"45 Minutes Before"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{disabled:!a||!t||!n,onClick:function(){return function(e){var t=e.type,n=e.time,a=e.location;Notification.requestPermission().then((function(e){"granted"===e&&(new Worker("worker.js").postMessage({type:t,time:n,location:a,REACT_APP_API_KEY:"822d855114f668d86cf12cdd9557e9bb"}),new Notification("Notification Created Successfully!"))}))}({type:t,time:n,location:a})},children:"Create Notification"})]})},H=function(){var e=Object(x.c)(E),t=function(e){switch(e){case"Clouds":return Object(g.jsx)(l.a,{icon:"cloud",className:"cloud"});case"Rain":return Object(g.jsx)(l.a,{icon:"cloud-showers-heavy",className:"cloud"});case"Clear":return Object(g.jsx)(l.a,{icon:"sun",className:"sun"});case"Thunderstorm":return Object(g.jsx)(l.a,{icon:"bolt"});case"Snow":return Object(g.jsx)(l.a,{icon:"snowflake"});case"Smoke":return Object(g.jsx)(l.a,{icon:"smog"});case"Drizzle":return Object(g.jsx)(l.a,{icon:"cloud-rain",className:"cloud"})}},n=function(t){return"fahrenheit"===e?Object(M.floor)(1.8*(t-273.15)+32)+"\xb0F":Object(M.floor)(t-273.15)+"\xb0C"};return Object(g.jsx)(c.a.Fragment,{children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(W,{}),Object(g.jsxs)(s.d,{children:[Object(g.jsx)(s.b,{path:"/weather",render:function(){return Object(g.jsx)(A,{handleIconDisplay:t,handleTemperatureCalculations:n})}}),Object(g.jsx)(s.b,{path:"/hourly-forecast",render:function(){return Object(g.jsx)(L,{handleIconDisplay:t,handleTemperatureCalculations:n})}}),Object(g.jsx)(s.b,{path:"/daily-forecast",render:function(){return Object(g.jsx)(F,{handleIconDisplay:t,handleTemperatureCalculations:n})}}),Object(g.jsx)(s.b,{path:"/notification-center",component:z}),Object(g.jsx)(s.b,{path:"/not-found",component:D}),Object(g.jsx)(s.a,{from:"/",exact:!0,to:"/weather"}),Object(g.jsx)(s.a,{to:"/not-found"})]})]})})},P=(n(84),n(16)),U=n(14),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},q=n(44),V=n(25),Y=n(12),K=n(47),J=n(6);var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WEATHER_REQUEST_SENT":return{isRequesting:!0};case"SET_WEATHER_SUCCESS":return Object(J.a)(Object(J.a)({},e),{},{weather:t.payload,isRequesting:!1});case"SET_LOCATION":return Object(J.a)(Object(J.a)({},e),{},{location:t.payload});default:return e}},G={unit:"fahrenheit"};var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEMP_UNIT":return Object(J.a)(Object(J.a)({},e),{},{unit:t.payload});default:return e}};var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALERT_TYPE":return Object(J.a)(Object(J.a)({},e),{},{type:t.payload});case"SET_ALERT_TIME":return Object(J.a)(Object(J.a)({},e),{},{time:t.payload});default:return e}};var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER_FAILURE":return Object(J.a)(Object(J.a)({},e),{},{errorStatus:!0,errorMessage:t.errorMessage});case"SET_WEATHER_SUCCESS":return{errorStatus:!1,errorMessage:null};default:return e}},ee={key:"root",storage:K.a},te=Object(Y.combineReducers)({weatherDataReducer:Q,settingsReducer:X,notificationsReducer:Z,errorReducer:$}),ne=Object(V.a)(ee,te),ae=n(45),ce=n(46),re=Object(Y.combineReducers)({weatherReducer:ne}),ie=Object(Y.createStore)(re,Object(ce.composeWithDevTools)(Object(Y.applyMiddleware)(ae.a))),oe=Object(V.b)(ie);P.b.add(U.i,U.b,U.d,U.f,U.e,U.a,U.h,U.g,U.c),i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(x.a,{store:ie,children:Object(g.jsx)(q.a,{persistor:oe,children:Object(g.jsx)(H,{})})})}),document.getElementById("root")),B()}},[[85,1,2]]]);
//# sourceMappingURL=main.bf210bec.chunk.js.map