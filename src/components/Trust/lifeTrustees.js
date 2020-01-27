import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/trust/presentTrustees";
const LifeTrustees = () => (
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
                    <img className="img-thumbnail" src={d.img} alt="history" />
                   <div>{d.name}</div>
                   <div>{d.position}</div>
              
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
);

export default LifeTrustees;
