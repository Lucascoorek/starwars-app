import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Footer from "./components/layout/Footer";
import Status from "./components/layout/Status";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/status" component={Status} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
