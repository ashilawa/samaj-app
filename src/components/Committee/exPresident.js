import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/committee/exPresident";
const ExPresident = () => (
  <div className="body">
    <div>
      <Table className="content" striped bordered hover responsive>
        <thead>
          <tr>
            <th className="table-td-center table-header-bg" colSpan="2">
              {data.heading}
            </th>
          </tr>
          <tr>
            {data.tableheading.map(s => (
              <th className="table-td-center">{s}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.body.map(s => (
            <tr>
              <td>{s.president}</td>
              <td>{s.period}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
);

export default ExPresident;
