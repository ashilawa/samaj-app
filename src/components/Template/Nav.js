import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`/images/Mobile-Logo.jpg`} alt="RSM-logo" />
      </Link>
      <header>
        <h2>Rohidas Sudharak Mandal</h2>
      </header>
    </section>

    <section className="blurb">
      <ul className="actions">
        <li>
          <p>
            रोहिदास सुधारक मंडळ कुर्ला हि संस्था ७५ हुन अधिक अधिक वर्षे कुर्ला
            विभागात सामाजिकम शैक्षणिक आणि क्रीडा क्षेत्रात कार्यरत आहे.
          </p>
          <Link to="/about" className="button ">
            About Us
          </Link>
        </li>
      </ul>
    </section>
   <div></div>
  </section>
);

export default Nav;
