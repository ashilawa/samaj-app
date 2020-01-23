import React from "react";
import Helmet from "react-helmet";
import Main from "../layouts/Main";
import common from "../data/common";
import History from "../components/Srm/history";
import literature from "../components/Srm/literature";
import Stand from "../components/Srm/busstand";
import { Tabs, Tab } from "react-bootstrap";

const tabRoutes = {
  history: History,
  literature: literature,
  busstand: Stand
};

const Srm = () => (
  <Main>
    <Helmet title="Srm" />
    <article className="post" id="srm">
      <section id="intro">
        <div className="title" >
        
          <header>
            <h2>{common.srm.title}</h2>
          </header>
        </div>

        <Tabs defaultActiveKey="history" >
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
