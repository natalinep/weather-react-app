import React, { useState } from "react";
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

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="day">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="day-inner my-3" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>

        {/* <div className="day-inner">
            <h6>Mon</h6>
            <div className="img">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="goldenrod"
                size={40}
                animate={true}
              />
            </div>
            <div className="temp">
              22° / <span>20°</span>
            </div>
          </div>

          <div className="day-inner">
            <h6>Tue</h6>
            <div className="img">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="goldenrod"
                size={40}
                animate={true}
              />
            </div>
            <div className="temp">
              22° / <span>20°</span>
            </div>
          </div>
        </div>

        <div className="day">
          <div className="day-inner">
            <h6>Wed</h6>
            <div className="img">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="goldenrod"
                size={40}
                animate={true}
              />
            </div>
            <div className="temp">
              22° / <span>20°</span>
            </div>
          </div>

          <div className="day-inner">
            <h6>Thu</h6>
            <div className="img">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="goldenrod"
                size={40}
                animate={true}
              />
            </div>
            <div className="temp">
              22° / <span>20°</span>
            </div>
          </div>

          <div className="day-inner">
            <h6>Fri</h6>
            <div className="img">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="goldenrod"
                size={40}
                animate={true}
              />
            </div>
            <div className="temp">
              22° / <span>20°</span>
            </div>
          </div>
        </div> */}
      </div>
    );
  } else {
    const apiKey = "3f08bfa61b58c72a1282fd754e1f43b2";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
