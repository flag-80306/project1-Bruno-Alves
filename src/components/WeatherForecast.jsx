import { useEffect, useState } from "react";

function WeatherForecast({ lat, lon }) {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    (async function () {
      if (!lat || !lon) {
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_MAP_API_KEY
      }&units=metric`;

      const response = await fetch(url);
      const result = await response.json();

      // if (result.list != undefined) {
      const fiveDayWeatherForecast = [
        result.list[8],
        result.list[16],
        result.list[24],
        result.list[32],
        result.list[39],
      ];
      console.log(fiveDayWeatherForecast);
      // }

      setForecast(fiveDayWeatherForecast);
    })();
  }, [lat]);

  return (
    <>
      <p id="fiveDayForecast">Forecast for the next 5 days</p>
      {/* <div>
        {forecast?.map((item) => (
          <>
            <p>{item.weather.icon}</p>
            <p>{item.main.temp}</p>
          </>
        ))}
      </div> */}
      <div className="forecastContainer">
        <div className="weatherInfo">
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              forecast[0]?.weather?.[0].icon +
              ".png"
            }
            alt={forecast && "weather-icon-" + forecast[0]?.weather?.[0].main}
          />
          <div className="weatherDescription">
            {forecast[0]?.weather[0].description}
          </div>
          <div className="forecastTemp">{forecast[0]?.main.temp}°C</div>
        </div>

        <div className="weatherInfo">
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              forecast[1]?.weather?.[0].icon +
              ".png"
            }
            alt={forecast && "weather-icon-" + forecast[1]?.weather?.[0].main}
          />
          <div className="weatherDescription">
            {forecast[1]?.weather[0].description}
          </div>
          <div className="forecastTemp">{forecast[1]?.main.temp}°C</div>
        </div>

        <div className="weatherInfo">
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              forecast[2]?.weather?.[0].icon +
              ".png"
            }
            alt={forecast && "weather-icon-" + forecast[2]?.weather?.[0].main}
          />
          <div className="weatherDescription">
            {forecast[2]?.weather[0].description}
          </div>
          <div className="forecastTemp">{forecast[2]?.main.temp}°C</div>
        </div>

        <div className="weatherInfo">
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              forecast[3]?.weather?.[0].icon +
              ".png"
            }
            alt={forecast && "weather-icon-" + forecast[3]?.weather?.[0].main}
          />
          <div className="weatherDescription">
            {forecast[3]?.weather[0].description}
          </div>
          <div className="forecastTemp">{forecast[3]?.main.temp}°C</div>
        </div>

        <div className="weatherInfo">
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              forecast[4]?.weather?.[0].icon +
              ".png"
            }
            alt={forecast && "weather-icon-" + forecast[4]?.weather?.[0].main}
          />
          <div className="weatherDescription">
            {forecast[4]?.weather[0].description}
          </div>
          <div className="forecastTemp">{forecast[4]?.main.temp}°C</div>
        </div>
      </div>
    </>
  );
}

export default WeatherForecast;
