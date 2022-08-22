import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="day">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="day-inner my-3" key={index}>
                  <WeatherForecastDay data={dailyForecast} turn={props.turn} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
