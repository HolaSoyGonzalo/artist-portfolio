import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Intro from "./Pages/Intro";

const Container = () => {
  return (
    <Router>
      <Route exact path="/" component={Intro} />
    </Router>
  );
};

export default Container;
