import Slider from "../components/Slider";

function CardDetailView({ params }) {
  console.log(params);
  return (
    <>
      <div className="headerBackground"></div>
      <br />
      <br />
      <h2>Details from {params.name}</h2>
      <Slider city={params.name} />
    </>
  );
}

export default CardDetailView;
