import { Link } from "wouter";
import cardsInfo from "../assets/trips/cardsInfo";
function HomeViewCards() {
  // console.log(cardsInfo[2].imgURL);
  return (
    <div className="cardsSection">
      {cardsInfo.map((trip, index) => (
        <Link href={"tripdetail/" + trip.city}>
          <div className="card" key={index}>
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
