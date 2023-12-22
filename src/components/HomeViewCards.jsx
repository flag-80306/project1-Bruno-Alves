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
      {data.map((trip, index) => (
        <Link href={"tripdetail/" + trip.id}>
          <div className="card" key={trip.id}>
            <img src={trip.imgURL} alt={`Image for ${trip.city}`} />
            <p>
              <span>{trip.city}</span>
              <br />
              {trip.date}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomeViewCards;
