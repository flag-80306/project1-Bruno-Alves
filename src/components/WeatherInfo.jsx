import { useEffect, useState } from "react";

function WeatherInfo({ lat, lon }) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    (async function () {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dfa650f1b164ba810c4c88c1a7899e6f&units=metric`;
      const response = await fetch(url);
      const result = await response.json();

      console.log("Console.log url");
      console.log(url);
      console.log("Console.log weather!!!");
      console.log(result);
      setWeather(result);
    })();
  }, []);

  return (
    <>
      <div>WeatherInfo</div>
      <div>{weather.name}</div>
      {/* <div className='weatherContainer'>
    			<div className='weatherCard'>
    				{weather.}
    			</div>
    		</div> */}
    </>
  );
}

export default WeatherInfo;
