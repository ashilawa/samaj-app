import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Main from "../layouts/Main";
import PlatinumEvent from "../components/Platinum/PlatinumEvent";

const Platinum = () => (
  <Main>
    <Helmet title="75years" />

    <article className="post" id="platinum">
      <header>
        <div className="title">
          <h2 className="header-withoutspace">
            <Link to="/platinum">अमृत महोत्सव </Link>
          </h2>
        </div>
      </header>
      <PlatinumEvent gif={true}/>
    </article>
  </Main>
);

export default Platinum;
