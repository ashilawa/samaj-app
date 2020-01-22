/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import "../static/css/views/_test.scss";
import faAddressCard from "@fortawesome/fontawesome-free-regular/faAddressCard";
import Main from "../layouts/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import faEnvelope from "@fortawesome/fontawesome-free-regular/faEnvelope";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <Main>
      <Helmet title="Contact" />
      <article className="post" id="contact">
        <header >
          <div className="title">
            <h2>
              <Link to="/contact">Contact Us</Link>
            </h2>
          </div>
        </header>

        <div className="bg">
          <Container fluid="true">
            <Row>
              <Col>
                <Card style={{ height: "100%" }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Header className="card-header">
                    <FontAwesomeIcon className="fa-icon" icon={faAddressCard} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <h4 className="contact-div">
                        <a
                          href="https://goo.gl/maps/vj5icsBSY8upifkR6"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Rohidas Samaj Kurla
                        </a>
                      </h4>
                    </Card.Title>
                    <Card.Text className="contact-div">
                      Sant Rohidas Samaj Mandir, LBS Rd, Kurla West, Mumbai,
                      Maharashtra 400070
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ height: "100%" }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Header className="card-header">
                    <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <h4 className="contact-div">+91 98252xxxxx</h4>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ height: "100%" }}>
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Header className="card-header">
                    <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <p className="contact-div">rohidassamaj@gmail.com</p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="container-fluid pt-3 contact-div">
              <div className="map-div">
                <iframe
                  width="800"
                  height="500"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCiUbr68SBoGzA2AbzS-RACUuShXE6p-hM
                  &amp;q=rohidas+samaj+kurla"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </Container>
        </div>

        {/* <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?q=rohidas+samaj+kurla&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
          aria-label="ROHIDAS SAMAJ PANCHAYAT SANGH"
        ></iframe> */}
      </article>
    </Main>
  );
};

export default Contact;
