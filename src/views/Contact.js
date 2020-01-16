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

const messages = [
  "hi",
  "hello",
  "hola",
  "you-can-email-me-at-literally-anything! Really",
  "well, not anything. But most things",
  "like-this",
  "or-this",
  "but not this :(  ",
  "you.can.also.email.me.with.specific.topics.like",
  "just-saying-hi",
  "please-work-for-us",
  "help",
  "admin",
  "or-I-really-like-your-website",
  "I'll-stop-distracting-you-now",
  "thanks"
];

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
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        {/* <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCiUbr68SBoGzA2AbzS-RACUuShXE6p-hM
      &q=rohidas+samaj+kurla"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              ><a href="https://www.embedgooglemap.org">embedgooglemap.org</a>
            </div>
          </div> */}
        <Container>
          <Row>
            <Col>
              <div className="container contact-div">
                <div>
                  <FontAwesomeIcon className="fa-icon" icon={faAddressCard} />
                </div>
                <div>
                  <h3>Rohidas Samaj Panchayat Sangh</h3>
                  <p>
                    Sant Rohidas Samaj Mandir, LBS Rd, Kurla West, Mumbai,
                    Maharashtra 400070
                  </p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="container contact-div">
                <div>
                  <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} />
                </div>
                <div>
                  <h3>+91 98252xxxxx</h3>
                </div>
              </div>
            </Col>
            <Col>
              <div className="container contact-div">
                <div>
                  <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                </div>
                <div>
                  <h3>rohidassamaj@gmail.com</h3>
                </div>
              </div>
            </Col>
          </Row>
          <div className="container contact-div">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=rohidas+samaj+kurla&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
                  frameborder="0"
                  scrolling="no"
                  marginheight="1"
                  marginwidth="1"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
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
