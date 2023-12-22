import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Carousel({ city }) {
  console.log("Console.log city!!!");
  console.log(city);
  return (
    <>
      <h3>Details from {city.name}</h3>

      <div className="carousel">
        <BsArrowLeftCircleFill />
        {city.slides?.map((slide, index) => (
          <img src={slide} className="slide" alt={`Image of ${city.name}`} />
        ))}
        <BsArrowRightCircleFill />
      </div>
    </>
  );
}

export default Carousel;
