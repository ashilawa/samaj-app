/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import faAddressCard from "@fortawesome/fontawesome-free-regular/faAddressCard";
import Main from "../layouts/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import faEnvelope from "@fortawesome/fontawesome-free-regular/faEnvelope";
import Card from "react-bootstrap/Card";

// Validates the first half of an email address.
const validateText = text => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = ["hi", "hello", "You can email us at:", "rsm", "rsmkurla"];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const Contact = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <Main>
      <Helmet title="Contact" />
      <article className="post" id="contact">
        <header>
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
                          Rohidas Sudharak Mandal Kurla
                        </a>
                      </h4>
                    </Card.Title>
                    <Card.Text className="contact-div">
                      Sant Rohidas Samaj Mandir, LBS Rd, opposite kurla court
                      ,Kurla West, Mumbai, Maharashtra 400070
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
                      <h4 className="contact-div">
                        <a href="https://api.whatsapp.com/send?phone=+917021885520">
                          +91 7021885520
                        </a>
                      </h4>
                    </Card.Title>
                    <Card.Text className="contact-div">
                      <a href="https://api.whatsapp.com/send?phone=+917021885520">
                        Send Message
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ height: "100%" }}>
                  <Card.Header className="card-header">
                    <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <div className="email-at">
                        <div
                          style={
                            validateText(message) ? {} : { color: " #f70c8d" }
                          }
                          onMouseEnter={() => setIsActive(false)}
                          onMouseLeave={() =>
                            idx < messages.length && setIsActive(true)
                          }
                        >
                          <h4 className="contact-div">
                            {" "}
                            <a
                              href={
                                validateText(message)
                                  ? `mailto:${message}@gmail.com`
                                  : ""
                              }
                            >
                              <span>{message}</span>
                              <span>@gmail.com</span>
                            </a>
                          </h4>
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text className="contact-div">
                      You can email us
                    </Card.Text>
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
                  &amp;q=Rohidas+Sudhark+Hall"
                  scrolling="no"
                ></iframe>
              </div>
            </div>
          </Container>
        </div>
      </article>
    </Main>
  );
};

export default Contact;
