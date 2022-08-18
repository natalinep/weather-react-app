import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-4">Sun</div>

        <div className="col-4">Mon</div>

        <div className="col-4">Tue</div>
      </div>

      <div className="row">
        <div className="col-4">Wed</div>

        <div className="col-4">Thu</div>

        <div className="col-4">Fri</div>
      </div>
    </div>
  );
}
