import React from "react";

export default function ShowTime(props) {
  let hours = props.time.getHours();
  let minutes = props.time.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {hours}:{minutes}
    </span>
  );
}
