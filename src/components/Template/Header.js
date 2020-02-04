import React from "react";
import { Link, NavLink } from "react-router-dom";

import Hamburger from "./Hamburger";
import routes from "../../data/routes";

const Header = () => (
  <header id="header">
    <h1>
      <Link to="/home" className="logo">
        <img src={`/images/Header-logo-latest.jpg`} alt="logo" />
      </Link>
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter(l => !l.index)
          .map(l => (
            <li key={l.label}>
              <NavLink to={l.path}>{l.label}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Header;
