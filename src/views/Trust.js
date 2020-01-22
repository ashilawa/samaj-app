import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";
import common from "../data/common";
import LifeTrustees from "../components/Trust/lifeTrustees";
import PastTrustees from "../components/Trust/pastTrustees";
import PresentTrustees from "../components/Trust/presentTrustees";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

const tabRoutes = {
  present: PresentTrustees,
  life: LifeTrustees,
  past: PastTrustees
}

const Trust = () => (
  <Main>
    <Helmet title="Trust" />
    <article className="post" id="trust">
      <header>
        <div className="title ">
          <h2>
            <Link to="trustees">{common.trustees.title}</Link>
          </h2>
        </div>
      </header>

      <Tabs defaultActiveKey="present" >
        {
          common.trustees.submenu.map(sec => {
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
