import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";
import common from "../data/common";
import Nav from "react-bootstrap/Nav";
import LifeTrustees from "../components/Trust/lifeTrustees";
import ExPresident from "../components/Trust/exPresident";
import CurrentTrustees from "../components/Trust/CurrentTrustees";

const Trust = () => (
  <Main>
    <Helmet title="Trust" />
    <article className="post" id="trust">
      <header>
        <div className="title ">
          <h2>
            <Link to="trust">{common.trustPage.title}</Link>
          </h2>
        </div>
      </header>
      <Nav fill justify variant="tabs" defaultActiveKey={`/}`}>
        {common.trustPage.submenu.map(sec => (
          <Nav.Item>
            <Nav.Link
              className="btn btn-danger rounded"
              href={`/trust/${sec.value}`}
            >
              {sec.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Router>
        <Switch>
          <Route exact path="/trust/" component={CurrentTrustees} />
          <Route path="/trust/currentTrustees" component={CurrentTrustees} />
          <Route path="/trust/liveTrustees" component={LifeTrustees} />
          <Route path="/trust/president" component={ExPresident} />
        </Switch>
      </Router>
    </article>
  </Main>
);

export default Trust;
