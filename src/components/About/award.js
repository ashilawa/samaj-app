import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/about/awards";
const Award = () => (
  <div className="container">
  <div className="table-body">
    <div>
      <Table className="content" striped bordered hover responsive>
        <thead>
          <tr>
            <th className="table-td-center table-header-bg" colSpan="3">
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
              <td>{s.year}</td>
              <td>{s.mp}</td>
              <td>{s.jp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

    </div>
    <div className="table-body">
    <div>
      <Table className="content" striped bordered hover responsive>
        <thead>
          <tr>
            <th className="table-td-center table-header-bg" colSpan="2">
              {data.adarsh.heading}
            </th>
          </tr>
          <tr>
            {data.adarsh.tableheading.map(s => (
              <th className="table-td-center ">{s}</th>
            ))}
          </tr>
        </thead>
        <tbody >
          {data.adarsh.body.map(s => (
            <tr>
              <td>{s.year}</td>
              <td>{s.name}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
    
    </div>
);

export default Award;