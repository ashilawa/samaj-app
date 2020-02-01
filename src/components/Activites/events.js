import React from "react";
import Table from "react-bootstrap/Table";
import data from "../../data/activites/activites";
import { Image } from "react-bootstrap";
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
    {data.images.map(src=>(
       <div class="shadow-lg p-3 mb-5 bg-white rounded activites-image">
              <Image src={src.img} fluid  key={src.id}/>
            </div>
    ))}
  
  </div>
  
);

export default Event;
