import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import Status from "./components/layout/Status";
import PowerState from "./context/PowerState";

function App() {
  return (
    <PowerState>
      <HashRouter basename="/">
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="/status" component={Status} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </PowerState>
  );
}

export default App;
