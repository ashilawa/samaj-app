import React from "react";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";
import routes from "../../data/routes";

const Header = () => (
  <header id="header">
    <h1>
      <Link to="/" className="logo">
        <img
          style={{ height: "50px" }}
          src={`/images/Mobile-Logo.jpg`}
          alt=""
        />
      </Link>
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter(l => !l.index)
          .map(l => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Header;
