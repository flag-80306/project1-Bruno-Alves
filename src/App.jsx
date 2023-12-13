import { Link, Route, Switch } from "wouter";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import AddLocationView from "./views/AddLocationView";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/">
          <HomeView />
        </Route>
        <Route path="/about">
          <AboutView />
        </Route>
        <Route path="/newlocation">
          <AddLocationView />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
