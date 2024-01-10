import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";
import HomeViewCards from "../components/HomeViewCards";
import WeatherInfo from "../components/WeatherInfo";

function CardDetailView({ id }) {
  console.log("Console.log id!");
  console.log(id);

  const [city, setCity] = useState({});

  useEffect(() => {
    (async function () {
      const url = "/mockAPI/data.json";

      const response = await fetch(url);
      const result = await response.json();

      const foundElement = result.find((elem) => {
        return elem.id == id;
      });
      console.log("Console.log foundElement!");
      console.log(foundElement);

      if (!foundElement) {
        window.location.href = "/pagenotfound";
        return;
      }

      setCity(foundElement);
    })();
  }, [id]);

  return (
    <>
      <div className="headerBackground"></div>
      <div className="spacer"></div>
      <div className="cityDetailContainer">
        <h2>Trip to {city.name}</h2>
        <p>{city.id}</p>
        <p>{city.date}</p>
      </div>
      <Carousel city={city} />
      <div className="cityInfo">
        <p>{city.description}</p>
        {/* Usar conditional rendering para as props lat e lon nao serem undefined */}
        <WeatherInfo lat={city.lat} lon={city.lon} name={city.name} />
      </div>
      <HomeViewCards />
    </>
  );
}

export default CardDetailView;
