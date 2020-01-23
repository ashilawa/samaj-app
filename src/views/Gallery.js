import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Main from "../layouts/Main";
import { Tab, Row, ListGroup, Col } from "react-bootstrap";
import Cell from "../components/Gallery/Cell";
import data from "../data/Gallery/photos";

const GallerySamaj = () => (
  <Main fullPage={true }>
    <Helmet title="gallery" />
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2>
            <Link to="/gallery">Gallery</Link>
          </h2>
        </div>
      </header>

      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link2019">
        <Row>
          <Col sm={2}>
            <ListGroup >
              {data.gallary.map(link => (
                <ListGroup.Item action variant="light" href={`#link${link.year}`} key={link.year}>
                  {link.year}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={10}>
          {data.gallary.map(link => (
            <Tab.Content>
               <Tab.Pane eventKey={`#link${link.year}`}  key={link.year}>
                {link.cell.map(event => (
                 
                    <Cell data={event}  />
                 
                ))}
              </Tab.Pane>

            </Tab.Content>
             ))}
          </Col>
        </Row>
      </Tab.Container>

    </article>
  </Main>
);

export default GallerySamaj;
