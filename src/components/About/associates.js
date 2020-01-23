import React from "react";


import associates from "../../data/about/associates";
import AssociatesCell from "./Cell";

const Associates = () => (
  <div className="body">
    <div className="link-to" id="litrature" />

    <div className="container">
      {associates.map(event => (
        <AssociatesCell   data={event} />
      ))}
    </div>
<<<<<<< HEAD
    <div className="container">

    <img className="history" src={`/images/about/associates/nidhi.png`} alt="history" />
    </div>
=======
>>>>>>> 847d1ba... about submenu added and srm tab updated
  </div>
);

export default Associates;
