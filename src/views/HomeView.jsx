import HomeViewCards from "../components/HomeViewCards";
import Hero from "../components/Hero";

function HomeView() {
  return (
    <>
      <Hero />
      <HomeViewCards slug={"tripdetail/"} />
    </>
  );
}

export default HomeView;
