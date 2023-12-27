import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";

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
      setCity(foundElement);
    })();
  }, []);

  return (
    <>
      <div className="headerBackground"></div>
      <div className="spacer"></div>
      <h2>The details</h2>
      <p>{city.id}</p>
      <p>{city.name}</p>
      <p>{city.date}</p>
      <Carousel city={city} />
    </>
  );
}

export default CardDetailView;
