import React from "react";

const Weather = props => {
  const {
    temperature,
    city,
    country,
    humidity,
    description,
    error
  } = props.data;
  return (
    <div className="weather__info">
      {city && (
        <p className="weather__key">
          Location:{" "}
          <span className="weather__value">
            {city}, {country}{" "}
          </span>
        </p>
      )}
      {temperature && (
        <p className="weather__key">
          Temperature:{" "}
          <span className="weather__value">
            {Math.floor(temperature)}&#8451;
          </span>
        </p>
      )}
      {humidity && (
        <p className="weather__key">
          Humidity: <span className="weather__value">{humidity}% </span>
        </p>
      )}
      {description && (
        <p className="weather__key">
          Conditions: <span className="weather__value">{description}</span>
        </p>
      )}
      {error && (
        <p className="weather__error">
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default Weather;
