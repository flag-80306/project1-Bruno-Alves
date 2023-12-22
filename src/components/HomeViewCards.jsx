import { Link } from "wouter";
import cardsInfo from "../assets/trips/cardsInfo";
import { useEffect, useState } from "react";
function HomeViewCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const url = "/mockAPI/data.json";

      const response = await fetch(url);
      const result = await response.json();

      console.log(result);
      setData(result);
    })();
  }, []);

  return (
    <div className="cardsSection">
      {data.map((city) => (
        <Link href={"tripdetail/" + city.id}>
          <div className="card" key={city.id}>
            <img src={city.cardImg} alt={`Image for ${city.city}`} />
            <p>
              <span>{city.name}</span>
              <br />
              {city.date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomeViewCards;
