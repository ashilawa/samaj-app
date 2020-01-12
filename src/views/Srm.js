import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Main from '../layouts/Main';
import common from "../data/common";
import Nav from "react-bootstrap/Nav";
import History from "../components/Srm/history"
import Litrature from '../components/Srm/litrature';
import Stand from '../components/Srm/busstand';

const Srm = () => (
  <Main>
    <Helmet title="Srm" />
    <article className="post" id="srm">
    <section id="intro">
      <div className="title" style={{textAlign:"center"}}>
      <Link to="/" className="logo">
        <img src={`/images/Sant-Rohidas.png`} alt="" />
      </Link>
      <header>
        <h2>Sant Rohidas Maharaj</h2>
      </header>
      </div>
      <Nav fill variant="tabs"  defaultActiveKey={`#${common.srm.submenu[0].value}`}>
            {common.srm.submenu.map(sec => (
              <Nav.Item>
                <Nav.Link href={`#${sec.value}`}>{sec.label}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>    
   <History/>
   <Litrature/>
   <Stand/>
    </section>
    </article>
  </Main>
);

export default Srm;
