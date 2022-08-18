import React from "react";
import Forecast from "./Forecast";

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
            />

            <input
              type="submit"
              value="Search"
              className="btn btn-dark button"
            />
          </form>
          <h3 className="text-center mt-3">London</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxn1TVuc43AnX0wZq_tHjzqS458oMTG7FnYg&usqp=CAU"
            alt="Cloudy"
            width={150}
            className="weather-img"
          />
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
            <h2>This Week</h2>

            <div>
              <button className="btn btn-dark me-2 rounded-pill">°C</button>

              <button className="btn btn-light me-4 rounded-pill">°F</button>

              <a href="/" title="Nataliia">
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

          <h2>Today's Highlights</h2>

          <div className="row">
            <div className="col-4">
              <h4>Huimdity</h4>
              <p>12%</p>
            </div>

            <div className="col-4">
              <h4>Wind</h4>
              <p>5 m/s</p>
            </div>

            <div className="col-4">
              <h4>Feels like</h4>
              <p>12 °C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
