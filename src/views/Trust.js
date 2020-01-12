import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import CurrentTrustees from "../components/Trust/CurrentTrustees";

import currentCommitte from "../data/resume/currentCommitte";
import common from "../data/common";
import Nav from "react-bootstrap/Nav";

const Trust = () => (
  <Main>
    <Helmet title="Trust" />
    <article className="post" id="trust">
    <header>
        <div className="title">
          <h2>
            <Link to="trust">{common.trustPage.title}</Link>
          </h2>
        </div>
        </header>
        <Nav variant="tabs" defaultActiveKey={`#${common.trustPage.submenu[0].value}`}>
            {common.trustPage.submenu.map(sec => (
              <Nav.Item>
                <Nav.Link href={`#${sec.value}`}>{sec.label}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
      
      <CurrentTrustees data={currentCommitte} title={common.trustPage.submenu[0]} />
      <CurrentTrustees data={currentCommitte} title={common.trustPage.submenu[1]} />
      <CurrentTrustees data={currentCommitte} title={common.trustPage.submenu[2]} />
      
      {/* <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References /> */}
    </article>
  </Main>
);

export default Trust;
