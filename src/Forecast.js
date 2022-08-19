import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast my-4">
      <div className="day">
        <div className="day-inner">
          <h6>Sun</h6>
          <div className="img">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={40}
              animate={true}
            />
          </div>
          <div className="temp">
            22°C / <span>20°C</span>
          </div>
        </div>

        <div className="day-inner">
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
            22°C/<span>20°C</span>
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
            22°C/<span>20°C</span>
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
            22°C/<span>20°C</span>
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
            22°C/<span>20°C</span>
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
            22°C/<span>20°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
