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
        <h2 >Rohidas Sudharak Mandal</h2>
      </header>
    </section>

    <section className="blurb">
      <ul className="actions">
        <li>
        <p>
        रोहिदास सुधारक मंडळ कुर्ला हि संस्था ७५ हुन अधिक अधिक वर्षे कुर्ला विभागात सामाजिकम शैक्षणिक आणि
क्रीडा क्षेत्रात कार्यरत आहे.
        </p>
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
      {/* <p className="copyright">&copy; Akshay Shilawane.</p> */}
    </section>
  </section>
);

export default Nav;
