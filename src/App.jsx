import { Link, Route, Switch } from "wouter";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import AddLocationView from "./views/AddLocationView";
import NotFoundView from "./views/NotFoundView";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomeView} />
        <Route path="/newlocation" component={AddLocationView} />
        <Route path="/aboutme" component={AboutView} />
        <Route component={NotFoundView} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
