import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Template/Header";
import Nav from "../components/Template/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../data/contact";

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
        <div>
          <section id="footer">
            <ul className="icons">
              {data.map(s => (
                <li key={s.label}>
                  <a href={s.link}>
                    <FontAwesomeIcon color={s.color} icon={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
            {/* <p className="copyright">&copy; Akshay Shilawane.</p> */}
          </section>
        </div>
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
