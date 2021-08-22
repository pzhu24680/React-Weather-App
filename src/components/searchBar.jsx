import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadWeather, setLocation } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import countries from "countries-list";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setUSState] = useState("");
  const dispatch = useDispatch();
  const states = [
    "AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL"
    ,"IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT",
    "NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","PR"
    ,"RI","SC","SD","TN","TX","UT","VT","VA","VI","WA","WV","WI","WY",
  ];
  const countryCodes = Object.keys(countries.countries);
  const countryNames = Object.values(countries.countries).map(
    (country) => country.name
  );

  const handleSearch = (city, country, state) => {
    const countryCode =
      countryCodes[
        countryNames.map((country) => country.toLowerCase()).indexOf(country)
      ];
    if (country !== "united states") {
      dispatch(loadWeather(city, countryCode));
      dispatch(setLocation(city, countryCode));
    } else {
      dispatch(loadWeather(city, countryCode, state));
      dispatch(setLocation(city, countryCode, state));
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        id="name"
        placeholder="City"
        name="query"
        onChange={(e) => setCity(e.currentTarget.value)}
      />
      <input
        list="countries"
        type="text"
        id="country"
        placeholder="Country"
        onChange={(e) => setCountry(e.currentTarget.value.toLowerCase())}
      />
      <datalist id="countries">
        {countryNames.map((country) => (
          <option key={country} value={country} />
        ))}
      </datalist>
      {country === "united states" ? (
        <span>
          <input
            className="search-bar1"
            list="states"
            type="text"
            id="state"
            placeholder="State"
            onChange={(e) => setUSState(e.currentTarget.value)}
          />
          <datalist id="states">
            {states.map((state) => (
              <option key={state} value={state} />
            ))}
          </datalist>
        </span>
      ) : null}

      <button type="submit" onClick={() => handleSearch(city, country, state)}>
        <FontAwesomeIcon icon="search" />
      </button>
    </div>
  );
};

export default SearchBar;
