import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Gallery/Cell";
import data from "../data/projects";

const Gallery = () => (
  <Main>
    <Helmet title="gallery" />
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2>
            <Link to="/gallery">Event Gallery</Link>
          </h2>
          <p>Events of our Rohidas samaj</p>
        </div>
      </header>
      {data.map(project => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Gallery;
