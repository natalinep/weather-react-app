import React from "react";
import Forecast from "./Forecast";
import ReactAnimatedWeather from "react-animated-weather";

import img from "./Natali.jpg";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row mb-3">
        <div className="col-5  weather-info">
          <form>
            <input
              type="search"
              placeholder="Type a city.."
              className="search rounded-2"
              autoFocus="on"
            />

            <input
              type="submit"
              value="Search"
              className="btn btn-dark button"
            />
          </form>
          <h3 className="text-center mt-3">
            <b>London</b>
          </h3>
          <div className="weather-img">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={150}
              animate={true}
            />
          </div>
          <div className="text-center">
            <span className="temperature">22</span>
            <span className="unit">°C</span>
          </div>

          <hr />

          <div className="text-center">
            <ul>
              <li>
                <strong>Monday,</strong> 16:00
              </li>

              <li>Mostly Cloudy</li>
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
              <b>12%</b>
            </div>

            <div className="highlights-inner">
              <h4>Wind</h4>
              <b>5 m/s</b>
            </div>

            <div className="highlights-inner">
              <h4>Feels like</h4>
              <b>12°C</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
