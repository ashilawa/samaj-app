import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/committee/presentCommittee";
import { Image } from "react-bootstrap";
const PresentCommittee = () => (
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
            <tr key={s[0].img}>
              {s.map(d => (
                <td key={d.img} >
                  {/* <img className="img-thumbnail" width={150} height={200}src={d.img} alt={d.name} /> */}
                  <Image src={d.img} width={150} height={180} rounded />
                  <div>{d.position}</div>
                  <div>{d.name}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
);

export default PresentCommittee;
