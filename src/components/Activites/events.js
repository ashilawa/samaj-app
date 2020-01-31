import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/activites/activites";
const Event = () => (
  <div className="body">
    <div>
      <Table className="content" bordered hover responsive>
        <thead>
          <tr>
            <th className="table-td-center table-header-bg" colSpan="3">
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
              <td>{s.regular}</td>
              <td>{s.yearly}</td>
              <td>{s.past}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
);

export default Event;
