import React, { Fragment } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from "../layout/layoutcomponent/pageheader";

export default function Test() {
  const data = [
    {
      id: "1",
      Name: "Joan Powell",
      Position: "Associate Developer",
      Salary: "$450,870",
    },
    {
      id: "2",
      Name: "Gavin Gibson",
      Position: "Account manager",
      Salary: "$230,540",
    },
    {
      id: "3",
      Name: "Julian Kerr",
      Position: "Senior Javascript Developer",
      Salary: "$55,300",
    },
    {
      id: "4",
      Name: "Cedric Kelly",
      Position: "Accountant",
      Salary: "$234,100",
    },
    {
      id: "5",
      Name: "Samantha May",
      Position: "Junior Technical Author",
      Salary: "$43,198",
    },
  ];
  return (
    <Fragment>
      <Pageheader title="TABLES" heading="Tables" active="Default tables" />

      <Row className="row-sm">
        <Col xl={12}>
          <Card>
            <Card.Header className=" pb-0">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mg-b-0">SIMPLE TABLE</h4>
              </div>
              <p className="tx-12 tx-gray-500 mb-2">
                Example of Nowa Simple Table. <Link to="#">Learn more</Link>
              </p>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table className="table mg-b-0 text-md-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((list, index) => (
                      <tr key={index}>
                        <th scope="row">{list.id}</th>
                        <td>{list.Name}</td>
                        <td>{list.Position}</td>
                        <td>{list.Salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
