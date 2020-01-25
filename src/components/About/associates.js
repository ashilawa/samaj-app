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
  </div>
);

export default Associates;
