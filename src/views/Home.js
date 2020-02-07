import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Main from "../layouts/Main";

import info from "../data/info";
import Helmet from "react-helmet";


const Home = () => (
  <Main>
    <Helmet title="Home rsm-kurla" />
    <article className="post" id="home">
      <Carousel style={{height:"700px"}}>
        {info.data.map(s => (
          <Carousel.Item key={s.path}>
            <img className="d-block w-100 " src={s.path} alt={s.alt}  />
            

          </Carousel.Item>
        ))}
      </Carousel>
    </article>
  </Main>
);

export default Home;
