import React from "react";


import associates from "../../data/about/associates";
import AssociatesCell from "./Cell";

const Associates = () => (
  <div className="body">
    <div className="link-to" id="litrature" />

    <div className="container">
      {associates.map(event => (
        <AssociatesCell   data={event}  key={event.image}/>
      ))}
    </div>
    <div className="container">
    </div>
  </div>
);

export default Associates;
