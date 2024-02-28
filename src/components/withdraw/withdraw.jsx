import React, { Fragment } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Row,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import * as Switcherdata from "../../common/switcherdata";
import Darkmode from "../darkmode/dark";


// useEffect(() => {
//   Switcherdata.localStorageBackUp(); // Assuming you want to execute this function as well

//   // Call Darkmode function to set the default theme to dark
//   Darkmode();
// }, []);
export default function Withdraw() {
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  return (
    <Fragment>
      <Pageheader title="WITHDRAW FUND" heading="Dashboard" active="Withdraw" />

      <Col lg={6} md={6}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Local bank.</div>
            <p className="mg-b-20">Withdraw funds to your local banks</p>
            <div className="">
              <>
                <Button variant="primary" onClick={handleShow}>
                  Withdraw
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body className="modal-body pd-sm-40">
                    <Button
                      onClick={() => setShow(false)}
                      className="close pos-absolute tx-16 r-30"
                      variant=""
                    >
                      x
                    </Button>
                    <h5 className="modal-title mg-b-5">Withdraw</h5>
                    <p className="mg-b-20">
                      Fill the form to Finish your withdrawal.
                    </p>
                    <Form.Group className="form-group">
                      <Form.Control placeholder="Amount" type="text" />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Control placeholder="account number" type="text" />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Control placeholder="Bank sort code" type="text" />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Control
                        placeholder="Acount holder name"
                        type="text"
                      />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Control placeholder="Bank" type="text" />
                    </Form.Group>
                    <Form.Group className="form-group mg-b-25">
                      <Form.Label className="ckbox mg-b-5">
                        {/* <input type="checkbox" />
                        <span className="tx-13">
                          I agree to <Link to="#">Terms</Link> and{" "}
                          <Link to="#">Privacy Policy</Link>
                        </span> */}
                      </Form.Label>{" "}
                      {/* <Form.Label className="ckbox">
                        <input defaultChecked type="checkbox" />
                        <span className="tx-13">
                          Yes, I want to receive email from your newsletter.
                        </span>
                      </Form.Label> */}
                    </Form.Group>
                    <Button
                      variant=""
                      className="btn btn-primary btn-block"
                      onClick={() => setShow(false)}
                    >
                      Authorize
                    </Button>
                  </Modal.Body>
                </Modal>
              </>
            </div>
          </Card.Body>{" "}
          <Card.Body>
            <div className="main-content-label mg-b-5">Crypto wallet</div>
            <p className="mg-b-20">Withdraw funds to your crypto wallet</p>
            <div className="">
              <>
                <Button variant="primary" onClick={handleShow2}>
                  Withdraw
                </Button>
                <Modal show={show2} onHide={handleClose2}>
                  <Modal.Body className="modal-body pd-sm-40">
                    <Button
                      onClick={() => setShow2(false)}
                      className="close pos-absolute tx-16 r-30"
                      variant=""
                    >
                      x
                    </Button>
                    <h5 className="modal-title mg-b-5">Withdraw</h5>
                    <p className="mg-b-20">Finish your withdrawal.</p>
                    <Form.Group className="form-group">
                      <Form.Control placeholder="Amount" type="text" />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Control placeholder="wallet address" type="text" />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Control placeholder="Network" type="text" />
                    </Form.Group>
                    {/*<Form.Group className="form-group">
                      <Form.Control placeholder="Email" type="text" />
                    </Form.Group> */}
                    <Form.Group className="form-group mg-b-25">
                      <Form.Label className="ckbox mg-b-5">
                        {/* <input type="checkbox" />
                        <span className="tx-13">
                          I agree to <Link to="#">Terms</Link> and{" "}
                          <Link to="#">Privacy Policy</Link>
                        </span> */}
                      </Form.Label>{" "}
                      {/* <Form.Label className="ckbox">
                        <input defaultChecked type="checkbox" />
                        <span className="tx-13">
                          Yes, I want to receive email from your newsletter.
                        </span>
                      </Form.Label> */}
                    </Form.Group>
                    <Button
                      variant=""
                      className="btn btn-primary btn-block"
                      onClick={() => setShow2(false)}
                    >
                      Authorize
                    </Button>
                  </Modal.Body>
                </Modal>
              </>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
}
