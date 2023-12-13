import { Link, Route, Switch } from "wouter";

import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import Header from "./components/Header";

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
      </Switch>
      <Footer />
    </>
  );
}

export default App;
