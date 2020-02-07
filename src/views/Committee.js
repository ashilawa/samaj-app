import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";
import common from "../data/common";
import PresentCommittee from "../components/Committee/presentCommittee";
import PastCommittee from "../components/Committee/pastCommittee";
import ExPresident from "../components/Committee/exPresident";

import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

const tabRoutes = {
  present: PresentCommittee,
  past: PastCommittee,
  president: ExPresident
}
const Committee = () => (
  <Main>
    <Helmet title="Committee rsm-kurla" />
    <article className="post" id="committee">
      <header>
        <div className="title ">
          <h2>
            <Link to="committee">{common.committee.title}</Link>
          </h2>
        </div>
      </header>
      <Tabs defaultActiveKey="present" >
        {
          common.committee.submenu.map(sec => {
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

export default Committee;
