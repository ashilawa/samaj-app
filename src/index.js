import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Featured
import Index from "./views/Index";
import About from "./views/About";
import Gallery from "./views/Gallery";
import Trust from "./views/Trust";
import Stats from "./views/Stats";
import Contact from "./views/Contact";

import NotFound from "./views/NotFound";

// All of our CSS
import "./static/css/main.scss";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/trust" component={Trust} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
