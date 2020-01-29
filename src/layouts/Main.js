import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Template/Header";
import Nav from "../components/Template/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollUpButton from "react-scroll-up-button";

import data from "../data/contact";
import { Row, Col } from "react-bootstrap";

class Main extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <Helmet titleTemplate="%s | RSM-Kurla" defaultTitle="RSM-Kurla" />
          <Header />
          <div id="main">{this.props.children}</div>
          {!this.props.fullPage && <Nav />}
        </div>
        {/* <div id="footer">
          <section className="icons">
            <img  width={50} height={50} src={`/images/Mobile-Logo.jpg`} alt=""></img>
            <ul className="icons">
              {data.map(s => (
                <li key={s.label}>
                  <a href={s.link}>
                    <FontAwesomeIcon color={s.color} icon={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
            
            <p className="copyright">created by - Akshay Shilawane and team</p>
          </section>
        </div> */}
        <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
          <Row>
            <Col>
              <a href="http://localhost:3000/committee">
                <img
                  width={70}
                  height={70}
                  src={`/images/Mobile-Logo.jpg`}
                  alt=""
                ></img>
              </a>
            </Col>
            <Col className="footer-text">
              {" "}
              Copyright &copy; Rohidas Sudharak Manda,Kurla
            </Col>
            <Col>
              <div className="icons-padding">
                <ul className="icons">
                  {data.map(s => (
                    <li key={s.label}>
                      <a href={s.link}>
                        <FontAwesomeIcon color={s.color} icon={s.icon} />
                      </a>
                    </li>
                  ))}
                  <li>Created by Akshay Shilawane and team</li>
                </ul>
              </div>
            </Col>
          </Row>
        </footer>
        <ScrollUpButton />
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  fullPage: PropTypes.bool
};

Main.defaultProps = {
  children: null,
  fullPage: false
};

export default Main;
