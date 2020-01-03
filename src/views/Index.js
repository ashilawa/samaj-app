import React from "react";
//import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import Main from "../layouts/Main";

import info from "../data/info";

console.log(info);

const Index = () => (
  <Main>
    <article className="post" id="index">
      <Carousel>
        {info.data.map(s => (
          <Carousel.Item>
            <img className="d-block w-100" src={s.path} alt={s.alt} />
            <Carousel.Caption>
              <h3>{s.label}</h3>
              <p>{s.info}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </article>
  </Main>
);

export default Index;
