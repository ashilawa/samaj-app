import React, { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import CurrentTrustees from "../components/Trust/CurrentTrustees";

import currentCommitte from "../data/trust/currentCommitte";

import common from "../data/common";
import Nav from "react-bootstrap/Nav";

function Trust() {
  const [currentCommitteTab, setCurrentCommitteTab] = useState(
    currentCommitte[0]
  );

  function handleTrust(value) {
    console.log(value);

    const filteredTab = currentCommitte.find(
      committee => committee.menu === value
    );
    console.log(filteredTab);
    return filteredTab;
  }

  return (
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
        <Nav
          variant="tabs"
          defaultActiveKey={`#${common.trustPage.submenu[0].value}`}
        >
          {common.trustPage.submenu.map(sec => (
            <Nav.Item>
              <Nav.Link
                onClick={() => setCurrentCommitteTab(handleTrust(sec.value))}
              >
                {sec.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <CurrentTrustees data={currentCommitteTab} />

        {/* <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References /> */}
      </article>
    </Main>
  );
}

export default Trust;
