import React from "react";
<<<<<<< HEAD
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
              <th className="table-td-center ">{s}</th>
            ))}
          </tr>
        </thead>
        <tbody >
          {data.body.map(s => (
            <tr>
              <td>{s.name}</td>
              <td>{s.president}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
=======
const Panchayat = () => (
  <div className="body">
    <div className="link-to" id="busstand" />
    <div className="title">
      <h3>award</h3>
    </div>
    Panchayat
  </div>
>>>>>>> 847d1ba... about submenu added and srm tab updated
);

export default Panchayat;
