function Slider({ city }) {
  console.log("Console.log city!!!");
  console.log(city);
  return (
    <>
      <h3>Details from {city}</h3>

      <div className="carousel">
        {city?.map((slide, index) => (
          // <p>{slide}</p>
          <img src={slide} alt={`Image ${index}`} />
        ))}
      </div>
    </>
  );
}

export default Slider;
