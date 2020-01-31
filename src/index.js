import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Featured
import Home from "./views/Home";
import About from "./views/About";
import Gallery from "./views/Gallery";
import Trust from "./views/Trust";
import Srm from "./views/Srm";
import Contact from "./views/Contact";
import Activites from "./views/Activites";

import NotFound from "./views/NotFound";

// All of our CSS
import "./static/css/main.scss";
import Committee from "./views/Committee";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/srm" component={Srm} />
      <Route path="/contact" component={Contact} />
      <Route path="/committee" component={Committee} />
      <Route path="/activites" component={Activites} />
      <Route path="/trustees" component={Trust} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
