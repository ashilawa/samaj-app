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
          <Helmet titleTemplate="%s | Rohidas samaj kurla" defaultTitle="Rohidas Sudharak Mandal,Kurla" />
          <Header />
          <div id="main">{this.props.children}</div>
          {!this.props.fullPage && <Nav />}
        </div>
        <footer id="footer" className="py-4 bg-dark text-white-50">
          <Row>
            <Col xs={1}>
              <a href="http://localhost:3000/committee">
                <img
                  width={70}
                  height={70}
                  src={`/images/Mobile-Logo.jpg`}
                  alt=""
                ></img>
              </a>
            </Col>
            <Col className="footer-text" xs={2}><span>Copyright &copy; Rohidas Sudharak Mandal,Kurla </span></Col>
            <Col xs={6} >
              <div className="icons-padding">
                <ul className="icons">
                  {data.map(s => (
                    <li key={s.label}>
                      <a href={s.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon color={s.color} icon={s.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col className="footer-text" xs={2}><span>Created by Akshay Shilawane and Team </span></Col>
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
