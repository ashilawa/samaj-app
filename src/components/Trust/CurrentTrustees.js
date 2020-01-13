import React from "react";
import Table from "react-bootstrap/Table";

const CurrentTrustees = ({ data }) => (
  <div className="education">
    <div className="title">
      <h3>{data.label}</h3>
    </div>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {data.heading.map(s => (
            <th>{s}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.body.map(s => (
          <tr>
            <td>{s.position}</td>
            <td>{s.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default CurrentTrustees;
