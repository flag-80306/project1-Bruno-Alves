import Slider from "../components/Slider";

function CardDetailView({ params }) {
  return (
    <>
      <h2>Details from {params.name}</h2>
      <Slider city={params.name} />
    </>
  );
}

export default CardDetailView;
