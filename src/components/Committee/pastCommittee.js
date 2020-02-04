import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/committee/pastcommittee";
const PastCommittee = () => (
  <div className="body">
    <div className="content">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="table-td-center table-header-bg" colSpan="1">
              {data.heading}
            </th>
          </tr>
        </thead>
        <tbody >
          {data.body.map(s => (
            <tr key={s.img}>
                <td >
                <img className="history" src={s.img} alt="pastcommittee" />
                </td>  
            </tr>
          ))}
          <tr>
                <td >
                  <h2>२०१६- २०१९</h2>
                <img className="history" src={"images/committee/past/image5.png"} alt="pastcommittee" />
                </td>  
            </tr>

        </tbody>
      </Table>
    </div>
  </div>
);

export default PastCommittee;
