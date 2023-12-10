function Hero() {
  return (
    <>
      <div className="hero">
        <div className="gradientFilter">
          <div className="heroNav">
            <ul>
              <li>
                <a href="#">Travel Blog</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Add Location</a>
              </li>
              <li>
                <a href="#">The Traveler</a>
              </li>
            </ul>
          </div>

          <div className="heroDetail">
            <p>Latest Posts</p>
            <h2>Berlin</h2>
            <p>10/12/2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
