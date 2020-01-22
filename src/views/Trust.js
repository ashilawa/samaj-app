import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";
import common from "../data/common";
import LifeTrustees from "../components/Trust/lifeTrustees";
import ExPresident from "../components/Trust/exPresident";
import CurrentTrustees from "../components/Trust/CurrentTrustees";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

const tabRoutes = {
  currentTrustees: CurrentTrustees,
  liveTrustees: LifeTrustees,
  president: ExPresident
}

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

      <Tabs defaultActiveKey="currentTrustees" id="uncontrolled-tab-example">
        {
          common.trustPage.submenu.map(sec => {
            const TabComponent = tabRoutes[sec.value];
            return (
              <Tab  eventKey={sec.value} title={sec.label} key={sec.value}>
                {<TabComponent />}
              </Tab>
            )

          })
        }
      </Tabs>
      
    </article>
  </Main>
);

export default Trust;
