/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/css/views/test.scss";
import faAddressCard from "@fortawesome/fontawesome-free-regular/faAddressCard";
import Main from "../layouts/Main";

// Validates the first half of an email address.
// const validateText = (text) => {
//   NOTE: Passes RFC 5322 but not tested on google's standard.
//   eslint-disable-next-line no-useless-escape
//   const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
//   return re.test(text) || text.length === 0;
// };

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
        <div className="wrapper">
          <div></div>
          {/* 
<div className="mapouter">
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
          <div
            class="elementor-element elementor-element-229f3154 elementor-column elementor-col-100 elementor-top-column"
            data-id="229f3154"
            data-element_type="column"
            data-settings='{"background_background":"classic"}'
          >
            <div class="elementor-column-wrap  elementor-element-populated">
              <div class="elementor-widget-wrap">
                <div
                  class="elementor-element elementor-element-1273373 elementor-widget elementor-widget-heading"
                  data-id="1273373"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div class="elementor-widget-container">
                    <h3 class="elementor-heading-title elementor-size-large">
                      Contact Us
                    </h3>{" "}
                  </div>
                </div>
                <section
                  class="elementor-element elementor-element-6b8b5da1 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-inner-section"
                  data-id="6b8b5da1"
                  data-element_type="section"
                >
                  <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-row">
                      <div
                        class="elementor-element elementor-element-fb9067b elementor-column elementor-col-33 elementor-inner-column"
                        data-id="fb9067b"
                        data-element_type="column"
                      >
                        <div class="elementor-column-wrap  elementor-element-populated">
                          <div class="elementor-widget-wrap">
                            <div
                              class="elementor-element elementor-element-68efc7ae elementor-view-default elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="68efc7ae"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-box-wrapper">
                                  <div class="elementor-icon-box-icon">
                                    <a
                                      class="elementor-icon elementor-animation-"
                                      href="https://goo.gl/maps/YP2f3u5k5o9SeW5t6"
                                      target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faAddressCard} />
                                    </a>
                                  </div>
                                  <div class="elementor-icon-box-content">
                                    <h3 class="elementor-icon-box-title">
                                      <a
                                        href="https://goo.gl/maps/YP2f3u5k5o9SeW5t6"
                                        target="_blank"
                                      >
                                        Rohidas Samaj Panchayat Sangh
                                      </a>
                                    </h3>
                                    <p class="elementor-icon-box-description">
                                      Between B.D.D. Chawl No. 26 &amp; 27, Next
                                      to. Hanuman Temple, Delisle Road, N.M.
                                      Joshi Marg, Mumbai, Maharashtra 400013
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-7d03bbf9 elementor-column elementor-col-33 elementor-inner-column"
                        data-id="7d03bbf9"
                        data-element_type="column"
                      >
                        <div class="elementor-column-wrap  elementor-element-populated">
                          <div class="elementor-widget-wrap">
                            <div
                              class="elementor-element elementor-element-1d41b744 elementor-view-default elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="1d41b744"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-box-wrapper">
                                  <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                      <i
                                        class="fa fa-phone"
                                        aria-hidden="true"
                                      ></i>{" "}
                                    </span>
                                  </div>
                                  <div class="elementor-icon-box-content">
                                    <h3 class="elementor-icon-box-title">
                                      <span>+91-9326317594</span>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-646ce1d0 elementor-column elementor-col-33 elementor-inner-column"
                        data-id="646ce1d0"
                        data-element_type="column"
                      >
                        <div class="elementor-column-wrap  elementor-element-populated">
                          <div class="elementor-widget-wrap">
                            <div
                              class="elementor-element elementor-element-5d70c337 elementor-view-default elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                              data-id="5d70c337"
                              data-element_type="widget"
                              data-widget_type="icon-box.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-icon-box-wrapper">
                                  <div class="elementor-icon-box-icon">
                                    <span class="elementor-icon elementor-animation-">
                                      <i
                                        class="fa fa-envelope"
                                        aria-hidden="true"
                                      ></i>{" "}
                                    </span>
                                  </div>
                                  <div class="elementor-icon-box-content">
                                    <h3 class="elementor-icon-box-title">
                                      <span>rohidas_samaj@yahoo.co.in</span>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div
                  class="elementor-element elementor-element-c4f4d46 elementor-widget elementor-widget-google_maps"
                  data-id="c4f4d46"
                  data-element_type="widget"
                  data-widget_type="google_maps.default"
                >
                  <div class="elementor-widget-container">
                    <div class="elementor-custom-embed">
                      <iframe
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?q=ROHIDAS%20SAMAJ%20PANCHAYAT%20SANGH&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
                        aria-label="ROHIDAS SAMAJ PANCHAYAT SANGH"
                      ></iframe>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Main>
  );
};

export default Contact;
