import cardsInfo from "../assets/data/cardsInfo";
function Card() {
  //   console.log(cardsInfo.length);
  //   console.log(cardsInfo.map((trip) => trip));
  return (
    <div className="cardsSection">
      {cardsInfo.map((trip, index) => (
        <div className="card" key={index}>
          <img src={trip.imgURL} alt={`Image for ${trip.city}`} />
          <img
            src="https://images.unsplash.com/photo-1585164917473-bad9e1c92755?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={`Image for ${trip.city}`}
          />
          <p>{trip.city}</p>
          <p>{trip.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
