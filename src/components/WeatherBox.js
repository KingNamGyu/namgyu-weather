import React from "react";
import { Card } from "react-bootstrap";

const WeatherBox = ({ weather }) => {
  const temperatureC =
    weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : "";
  const temperatureF =
    weather && weather.main
      ? (((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
      : "";
  return (
    <Card className="weather-card">
      {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Card.Title className="name">{weather?.name}</Card.Title>
        <Card.Text className="temp">
          {`${temperatureC} °C / ${temperatureF} °F`}
        </Card.Text>
        <Card.Text className="description">
          {weather && weather.weather[0]?.description}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherBox;
