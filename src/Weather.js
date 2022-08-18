import React from "react";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <form>
            <div className="row">
              <div className="col-9">
                <input type="serch" placeholder="Type a city.." />
              </div>

              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxn1TVuc43AnX0wZq_tHjzqS458oMTG7FnYg&usqp=CAU"
            alt="Cloudy"
          />

          <div>
            <span>22</span>°C
          </div>

          <div>
            <ul>
              <li>
                <strong>Monday,</strong> 16:00
              </li>

              <li>Mostly Cloudy</li>
            </ul>
          </div>
        </div>

        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <h2>This Week</h2>
            </div>

            <div className="col-6">
              <button className="btn btn-dark">°C</button>

              <button className="btn btn-light">°F</button>

              <a>
                <img src="/" alt="Nataliia" />
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
              <p>5 m/StrictMode</p>
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
