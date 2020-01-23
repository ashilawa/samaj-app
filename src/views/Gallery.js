import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";
import Pagination from 'react-bootstrap/Pagination'
import { Tab, Row, ListGroup, Col } from "react-bootstrap";
import Cell from "../components/Gallery/Cell";
import data from "../data/projects";

let items = [];
for (let number = 1; number <= 20; number++) {
  items.push(
    <ListGroup.Item action href={`#link${number}`}>
    Link {number}
  </ListGroup.Item>
  );
}

const GallerySamaj = () => (
  <Main fullPage="true">
    <Helmet title="gallery" />
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2>
            <Link to="/gallery">Event Gallery</Link>
          </h2>
          <p>Events of our Rohidas samaj</p>
        </div>
      </header>

      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={2}>
      <ListGroup style={{height:"1000px",overflow:"scroll"}}>
        {/* <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          Link 3
        </ListGroup.Item> */}
        {items}
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          {/* <Sonnet /> */}
          xxxxx
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          {/* <Sonnet /> */}

          {data.map(project => (
        <Cell data={project} key={project.title} />
      ))}
        </Tab.Pane>

        <Tab.Pane eventKey="#link3">
          {/* <Sonnet /> */}

          rrrrr
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
      {/* {data.map(project => (
        <Cell data={project} key={project.title} />
      ))} */}


    </article>
  </Main>
);

export default GallerySamaj;
