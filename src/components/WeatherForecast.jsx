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

      console.log("Console.log url");
      console.log(url);
      console.log("Console.log forecast!!!");
      console.log(result);

      setForecast(result);
    })();
  }, [lat]);

  return (
    <>
      <div>Forecast Weather</div>
      <div>{forecast.list && forecast.list[0].main.temp}°C</div>
    </>
  );
}

export default WeatherForecast;
