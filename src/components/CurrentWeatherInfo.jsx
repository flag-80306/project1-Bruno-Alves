import { useEffect, useState } from "react";

function CurrentWeatherInfo({ lat, lon, name }) {
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    (async function () {
      if (!lat || !lon) {
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_MAP_API_KEY
      }&units=metric`;

      const response = await fetch(url);
      const result = await response.json();

      setCurrentWeather(result);
    })();
  }, [lat]);

  return (
    <>
      <div className="weatherContainer">
        <div>Current Weather</div>
        <div>{name}</div>
        <div className="weatherIcon">
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              currentWeather.weather?.[0].icon +
              ".png"
            }
            alt={"weather-icon-" + currentWeather.weather?.[0].main}
          />
        </div>

        <div>{currentWeather.main?.temp}°C</div>
      </div>
      {/* <div className='weatherContainer'>
    			<div className='weatherCard'>
    				{weather.}
    			</div>
    		</div> */}
    </>
  );
}

export default CurrentWeatherInfo;
