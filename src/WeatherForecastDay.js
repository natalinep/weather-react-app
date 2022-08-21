import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <h6>{day()}</h6>
      <div className="img">
        <WeatherIcon icon={props.data.weather[0].icon} size={40} />
      </div>
      <div className="temp">
        {Math.round(props.data.temp.max)}° /{" "}
        <span>{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
