import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div className="button-div">
      <div className="button">
        <Button
          variant={`${selectedCity == null ? "outline-warning" : "warning"}`}
          onClick={() => handleCityChange("current")}
        >
          Current Location
        </Button>

        {cities.map((city) => (
          <Button
            variant={`${selectedCity == city ? "outline-warning" : "warning"}`}
            onClick={() => handleCityChange(city)}
          >
            {city}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WeatherButton;
