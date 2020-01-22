import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`/images/Mobile-Logo.jpg`} alt="" />
      </Link>
      <header>
        <h2 className="header-withoutspace">Rohidas Sudharak Mandal</h2>
        <p>
          <a href="">rohidassamaj@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <ul className="actions">
        <li>
          <Link to="/about" className="button">
            About Us
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Akshay Shilawane.</p>
    </section>
  </section>
);

export default Nav;
