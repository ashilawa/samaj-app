import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";
import common from "../data/common";
import Nav from "react-bootstrap/Nav";
import PresentCommittee from "../components/Committee/presentCommittee";
import PastCommittee from "../components/Committee/pastCommittee";
import ExPresident from "../components/Committee/exPresident";


const Committee = () => (
  <Main>
    <Helmet title="Committee" />
    <article className="post" id="committee">
      <header>
        <div className="title ">
          <h2>
            <Link to="committee">{common.committee.title}</Link>
          </h2>
        </div>
      </header>
      <Nav fill justify variant="tabs" defaultActiveKey={`/committee/`}>
        {common.committee.submenu.map(sec => (
          <Nav.Item>
            <Nav.Link
              className="btn btn-success rounded"
              href={`/committee/${sec.value}`}
            >
              {sec.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Router>
        <Switch>
          <Route exact path="/committee/" component={PresentCommittee} />
          <Route path="/committee/currentTrustees" component={PresentCommittee} />
          <Route path="/committee/liveTrustees" component={PastCommittee} />
          <Route path="/committee/president" component={ExPresident} />
        </Switch>
      </Router>
    </article>
  </Main>
);

export default Committee;
