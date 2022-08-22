import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  let [loaded, setLoaded] = useState(true);

  let [maxFah, setMaxFah] = useState(props.data.temp.max);
  let [minFah, setMinFah] = useState(props.data.temp.min);

  function loadedTrue() {
    setLoaded(true);
    if (props.turn === true) {
      setMaxFah((props.data.temp.max * 9) / 5 + 32);
      setMinFah((props.data.temp.min * 9) / 5 + 32);
    } else {
      setMaxFah(props.data.temp.max);
      setMinFah(props.data.temp.min);
    }
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.turn]);

  if (loaded) {
    return (
      <div>
        <h6>{day()}</h6>
        <div className="img">
          <WeatherIcon icon={props.data.weather[0].icon} size={40} />
        </div>
        <div className="temp">
          {Math.round(maxFah)}° / <span>{Math.round(minFah)}°</span>
        </div>
      </div>
    );
  } else {
    loadedTrue();
    return null;
  }
}
