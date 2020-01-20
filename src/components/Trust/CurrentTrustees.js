import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/trust/currentCommitte";
const CurrentTrustees = () => (
  <div className="body">
    <div className="content">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="table-td-center table-header-bg" colSpan="2">
              {data.heading}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.body.map(s => (
            <tr>
              {s.map(d => (
                <td colSpan rowSpan>
                  <div>{d.position}</div>
                  <div>{d.name}</div>
                  <div>{d.mobile}</div>
                  <div>{d.available}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
);

export default CurrentTrustees;
