import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import CurrentTrustees from "../components/Trust/currentTrustees";

import currentCommitte from "../data/trust/currentCommitte";

import common from "../data/common";
import Nav from "react-bootstrap/Nav";
import LifeTrustees from "../components/Trust/lifeTrustees";
import ExPresident from "../components/Trust/exPresident";

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
            {/* <Nav.Link
                onClick={() => setCurrentCommitteTab(handleTrust(sec.value))}
              >
                {sec.label}
              </Nav.Link> */}
            <Nav.Link href={`/trust/${sec.value}`}>{sec.label}</Nav.Link>
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
