import React, { useState } from "react";
import Forecast from "./Forecast";
import ShowDay from "./ShowDay";
import ShowTime from "./ShowTime";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import ReactLoading from "react-loading";

import img from "./Natali.jpg";

import "./Weather.css";

export default function Weather(props) {
  const [cityName, setCityName] = useState(props.defaultCity);
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function showResponse(response) {
    setLoaded(true);
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      day: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "3f08bfa61b58c72a1282fd754e1f43b2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleCityChange(event) {
    setCityName(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="row mb-3">
          <div className="col-5  weather-info">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a city.."
                className="search rounded-2"
                autoFocus="on"
                onChange={handleCityChange}
              />

              <input
                type="submit"
                value="Search"
                className="btn btn-dark button"
              />
            </form>
            <h3 className="text-center mt-4">
              <b>{weatherData.city}</b>
            </h3>
            <div className="weather-img">
              <WeatherIcon icon={weatherData.icon} />
            </div>
            <div className="text-center">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>

            <hr />

            <div className="text-center">
              <ul>
                <li>
                  <strong>
                    <ShowDay day={weatherData.day} />,{" "}
                  </strong>
                  <ShowTime time={weatherData.time} />
                </li>

                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>

          <div className="col-7 weather-main">
            <div className="d-flex justify-content-between">
              <h2>
                <b>This Week</b>
              </h2>

              <div>
                <button className="btn btn-dark me-2 rounded-pill btn-active btn-unit">
                  °C
                </button>

                <button className="btn btn-light me-4 rounded-pill btn-unit">
                  °F
                </button>

                <a
                  href="https://bright-kulfi-de3a60.netlify.app/"
                  title="Nataliia Portfolio"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={img}
                    alt="Nataliia"
                    width={40}
                    className="rounded-2"
                  />
                </a>
              </div>
            </div>

            <Forecast />

            <h2>
              <b>Today's Highlights</b>
            </h2>

            <div className="highlights">
              <div className="highlights-inner">
                <h4>Huimdity</h4>
                <b>{weatherData.humidity}%</b>
              </div>

              <div className="highlights-inner">
                <h4>Wind</h4>
                <b>{Math.round(weatherData.wind)}m/s</b>
              </div>

              <div className="highlights-inner">
                <h4>Feels like</h4>
                <b>{Math.round(weatherData.feelsLike)}°C</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return (
      <div className="loading">
        <ReactLoading
          type="spinningBubbles"
          color="ececee"
          height={"20%"}
          width={"20%"}
        />
      </div>
    );
  }
}
