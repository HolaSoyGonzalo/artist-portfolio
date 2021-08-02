import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Intro from "./Pages/Intro";
import NavBar from "./Components/NavBar";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const Container = () => {
  return (
    <Router>
      <Route exact path="/" component={Intro} />
      <Route path="/portfolio" component={NavBar} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/portfolio/about" component={About} />
      <Route exact path="/portfolio/contact" component={Contact} />
    </Router>
  );
};

export default Container;
