import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";
import common from "../data/common";
import { Tabs, Tab } from "react-bootstrap";
import Panchayat from "../components/About/panchayat";
import Award from "../components/About/award";
import Associates from "../components/About/associates";
import SamajHistory from "../components/About/samajhistory";

const tabRoutes = {
  history: SamajHistory,
  associates: Associates,
  awards: Award,
  panchayat: Panchayat
};

const About = () => {
  return (
    <Main>
      <Helmet title="About" />
      <article className="post" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Us</Link>
            </h2>
          </div>
        </header>

        <Tabs defaultActiveKey="history">
          {common.about.submenu.map(sec => {
            const TabComponent = tabRoutes[sec.value];
            return (
              <Tab eventKey={sec.value} title={sec.label} key={sec.value}>
                {<TabComponent />}
              </Tab>
            );
          })}
        </Tabs>
      </article>
    </Main>
  );
};

export default About;
