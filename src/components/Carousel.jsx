import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Carousel({ city }) {
  console.log("Console.log city!!!");
  console.log(city);
  return (
    <>
      <h3>Details from {city.name}</h3>

      <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" />
        {city.slides?.map((slide, index) => (
          <img
            src={slide}
            className="slide"
            alt={`Image of ${city.name}`}
            key={index}
          />
        ))}
        <BsArrowRightCircleFill className="arrow arrow-right" />
        <span className="indicators">
          {city.slides?.map((_, index) => (
            <button key={index} onClick={null} className="indicator"></button>
          ))}
        </span>
      </div>
    </>
  );
}

export default Carousel;
