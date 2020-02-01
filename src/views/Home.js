import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Main from "../layouts/Main";

import info from "../data/info";


const Home = () => (
  <Main>
    <article className="post" id="home">
      <Carousel style={{height:"700px"}}>
        {info.data.map(s => (
          <Carousel.Item >
            <img className="d-block w-100 " src={s.path} alt={s.alt} key={s.path} />

          </Carousel.Item>
        ))}
      </Carousel>
    </article>
  </Main>
);

export default Home;
