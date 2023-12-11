import cardsInfo from "../assets/data/cardsInfo";
function Card() {
  //   console.log(cardsInfo.length);
  //   console.log(cardsInfo.map((trip) => trip));
  console.log(cardsInfo[0].imgURL);
  return (
    <div className="cardsSection">
      {cardsInfo.map((trip, index) => (
        <div className="card" key={index}>
          <img src={trip.imgURL} alt={`Image for ${trip.city}`} />
          <p>{trip.city}</p>
          <p>{trip.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
