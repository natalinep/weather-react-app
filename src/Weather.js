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
  let [unit, setUnit] = useState("°C");
  let [degree, setDegree] = useState(weatherData.temperature);
  let [feels, setFeels] = useState(weatherData.feelsLike);
  let [activeCelsius, setActiveCelsius] = useState(true);
  let [activeFah, setActiveFah] = useState(true);
  let [turn, setTurn] = useState(false);

  function showResponse(response) {
    setLoaded(true);
    setWeatherData({
      coordinates: response.data.coord,
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
    setDegree(response.data.main.temp);
    setFeels(response.data.main.feels_like);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleCityChange(event) {
    setCityName(event.target.value);
  }

  function showFahrenhait(event) {
    event.preventDefault();
    setUnit("°F");
    setDegree((weatherData.temperature * 9) / 5 + 32);
    setFeels((weatherData.feelsLike * 9) / 5 + 32);

    setActiveFah(false);
    setActiveCelsius(false);

    setTurn(true);
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("°C");
    setDegree(weatherData.temperature);
    setFeels(weatherData.feelsLike);

    setActiveCelsius(true);
    setActiveFah(true);

    setTurn(false);
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
              <WeatherIcon icon={weatherData.icon} size={150} />
            </div>
            <div className="text-center">
              <span className="temperature">{Math.round(degree)}</span>
              <span className="unit">{unit}</span>
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
                <button
                  onClick={showCelsius}
                  className={
                    activeCelsius
                      ? "btn-dark btn me-2 rounded-pill"
                      : "btn-light btn me-2 rounded-pill"
                  }
                >
                  °C
                </button>

                <button
                  onClick={showFahrenhait}
                  className={
                    activeFah
                      ? "btn-light btn me-4 rounded-pill"
                      : "btn-dark btn me-4 rounded-pill"
                  }
                >
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

            <Forecast coordinates={weatherData.coordinates} turn={turn} />

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
                <b>
                  {Math.round(feels)}
                  {unit}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return (
      <ReactLoading
        type="spinningBubbles"
        color="ececee"
        height={"20%"}
        width={"20%"}
        className="loader"
      />
    );
  }
}
