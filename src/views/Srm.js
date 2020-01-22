import React from "react";
import Helmet from "react-helmet";
import Main from "../layouts/Main";
import common from "../data/common";
import { BrowserRouter as Link } from "react-router-dom";
import History from "../components/Srm/history";
import Litrature from "../components/Srm/litrature";
import Stand from "../components/Srm/busstand";
import { Tabs, Tab } from "react-bootstrap";

const tabRoutes = {
  history: History,
  litrature: Litrature,
  busstand: Stand
};

const Srm = () => (
  <Main>
    <Helmet title="Srm" />
    <article className="post" id="srm">
      <section id="intro">
        <div className="title" style={{ textAlign: "center" }}>
          <Link to="/" className="logo">
            <img src={`/images/Sant-Rohidas.png`} alt="" />
          </Link>
          <header>
            <h2>Sant Rohidas Maharaj</h2>
          </header>
        </div>

        <Tabs defaultActiveKey="history" id="uncontrolled-tab-example">
          {common.srm.submenu.map(sec => {
            const TabComponent = tabRoutes[sec.value];
            return (
              <Tab eventKey={sec.value} title={sec.label} key={sec.value}>
                {<TabComponent />}
              </Tab>
            );
          })}
        </Tabs>
      </section>
    </article>
  </Main>
);

export default Srm;
