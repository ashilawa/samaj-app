import React from "react";
import Table from "react-bootstrap/Table";

const CurrentTrustees = ({ data, title }) => (
  <div className="education">
    <div className="link-to" id={title.value} />
    <div className="title">
      <h3>{title.label}</h3>
    </div>
    <Table striped bordered hover size="sm" responsive>
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
