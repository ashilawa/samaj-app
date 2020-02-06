import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Nav = () => (
  <section className="text-center" id="sidebar">
    <section id="intro">
      <Link to="/" className="logo ">
        <img src={`/images/Mobile-Logo.jpg`} alt="RSM-logo" />
      </Link>
      <header>
        <div>
        <h2>Rohidas Sudharak Mandal</h2>
        Reg No. E8809 Mumbai
        </div>
       
      </header>    
    </section>

    <section className="blurb text-center">
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
     <a href="/platinum" ><Image  src="/images/platinumjubilee/seventyfive.jpg"></Image></a> 
    </section>
   <div></div>
  </section>
);

export default Nav;
