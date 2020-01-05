import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import CurrentTrustees from '../components/Resume/CurrentTrustees';

import currentCommitte from '../data/resume/currentCommitte';
import common from '../data/common';


const Trust = () => (
  <Main>
    <Helmet title="Trust" />
    <article className="post" id="trust">
      <header>
        <div className="title">
        <h2><Link to="trust">{common.trustPage.title}</Link></h2>
          <div className="link-container">
            {common.section.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.value}`}>{sec.label}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <CurrentTrustees data={currentCommitte} title={common.section[0]}/>
      {/* <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References /> */}

    </article>
  </Main>
);

export default Trust;
