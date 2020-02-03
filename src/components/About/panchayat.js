import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/about/panchayat";
const Panchayat = () => (
  
  <div className="table-body">
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
              <th className="table-td-center " key={s}>{s}</th>
            ))}
          </tr>
        </thead>
        <tbody >
          {data.body.map(s => (
            <tr key={s.name}>
              <td>{s.name}</td>
              <td>{s.president}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
);

export default Panchayat;
