import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Card,
  Col,
  Form,
  Modal,
  Button,
  Row,
  Accordion,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Middle } from "../../common/countersdata";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { Danger1, Danger4 } from "../messagesPopup/messagesFunction";
import { ToastContainer } from "react-toastify";
import { copyAddress, copyBtcAMount, Timer } from "./functions";
import * as Switcherdata from "../../common/switcherdata";
import Darkmode from "../darkmode/dark";

export default function AddFund() {
  const [show, setShow] = useState(false);
  const [btcamount, setBTCAmount] = useState("");
  const [amountInUsd, setAmountInUsd] = useState("", 0);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedBtcAmount, setcopiedBtcAmount] = useState(false);

  const textElement = useRef(null);
  const amountElement = useRef(null);

  const walletBalance = 4000;
  const minDepositAmount = 500;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!amountInUsd) {
      // Check for empty input
      Danger1("Amount is required!");
      return; // Exit the function to prevent further actions
    } else if (amountInUsd < minDepositAmount) {
      Danger1("minimum you can deposit is $500");
    } else {
      handleShow();
    }
  };

  const handleHavePaid = () => {
    console.log("Mr bayo just sent this amount of BTC to you ", btcamount);
    handleClose();
    Timer();
  };

  const handleChangeBTC = (e) => {
    setAmountInUsd(e.target.value);
  };

  let BTCvaluePerUsd = 48000;
  let f = amountInUsd / BTCvaluePerUsd;

  useEffect(() => {
    console.log(btcamount);
    setBTCAmount(f);
  }, [btcamount, BTCvaluePerUsd, amountInUsd]);

  useEffect(() => {
    Switcherdata.localStorageBackUp(); // Assuming you want to execute this function as well

    // Call Darkmode function to set the default theme to dark
    Darkmode();
  }, []);
  return (
    <Fragment>
      <Pageheader title="ADD FUND" heading="Dashboard" active="Add Fund" />
      <ToastContainer />

      <Col lg={6} md={6}>
        <Row className="accordiondclose">
          <Col lg={12} md={12} style={{ padding: 0 }}>
            <Card>
              <Card.Body>
                <div>
                  <h6 className="card-title mb-1">Fund Your Wallet</h6>
                </div>
                <div
                  aria-multiselectable="true"
                  className="accordion accordion-dark"
                  id="accordion2"
                  role="tablist"
                >
                  <div className="card mb-0">
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="1" className="card mb-0 mt-2">
                        <Accordion.Header
                          className=""
                          id="headingTwo4"
                          role="tab"
                        >
                          {/* <i className="fe fe-plus-circle me-2"></i> */}
                          <Button variant="primary">Crypto Deposit</Button>{" "}
                        </Accordion.Header>
                        <Accordion.Body className="borders">
                          <h6>
                            <span className="text-warning">Note:</span> Minimum
                            Amount you can Fund your wallet is $500
                          </h6>
                          {/* <Card>
                            <Card.Body> */}
                          <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-group">
                              <Form.Control
                                placeholder="Enter $x to fund"
                                type="text"
                                value={amountInUsd}
                                onChange={handleChangeBTC}
                              />
                              <p>
                                $ {amountInUsd} = {btcamount} BTC
                              </p>
                            </Form.Group>
                            {/* <button type="submit">Submit</button> */}
                            <Button variant="primary" type="submit">
                              Deposit BTC
                            </Button>
                          </Form>
                          <div className="">
                            <>
                              <Modal show={show} onHide={handleClose}>
                                <Modal.Body className="modal-body pd-sm-40">
                                  <Button
                                    onClick={handleClose}
                                    className="close pos-absolute tx-16 r-30"
                                    variant=""
                                  >
                                    x
                                  </Button>
                                  <h5 className="modal-title mg-b-5">
                                    Add funds to your wallet
                                  </h5>
                                  <p className="mg-b-20">
                                    Copy the wallet address below and complete
                                    the transaction. After making your
                                    transaction, click on the{" "}
                                    <span className="text-warning">
                                      "I have paid"
                                    </span>{" "}
                                    button to Notify merchant.
                                  </p>
                                  <Card className="custom-card cart-details">
                                    <Card.Body>
                                      {/* <h5 className="mb-3 font-weight-bold tx-14">
                          Deposit Crypto
                        </h5> */}
                                      <dl className="dlist-align">
                                        <dt className="">Coin Name</dt>
                                        <dd className="text-end ms-auto">
                                          BTC
                                        </dd>
                                      </dl>
                                      {/* <dl className="dlist-align">
                          <dt>Name</dt>
                          <dd className="text-end  ms-auto">
                            SALEH SALEH ISAH
                          </dd>
                        </dl>*/}
                                      <dl className="dlist-align">
                                        <dt>Network</dt>
                                        <dd className="text-end ms-auto">
                                          BTC
                                        </dd>
                                      </dl>
                                      <dl className="dlist-align">
                                        <dt>Wallet Address</dt>
                                        <dd
                                          ref={textElement}
                                          className="text-end ms-auto"
                                          style={{ width: "50%" }}
                                        >
                                          1DbPhJ7bATYDusR2YQCiYD6mFYXPEPcESe{" "}
                                          {copiedAddress ? (
                                            <i
                                              className="fa fa-check"
                                              style={{
                                                marginLeft: "5px",
                                                cursor: "pointer",
                                                color: "lightgreen",
                                              }}
                                            ></i>
                                          ) : (
                                            <i
                                              className="fa fa-copy"
                                              onClick={() =>
                                                copyAddress(
                                                  textElement,
                                                  setCopiedAddress
                                                )
                                              }
                                              style={{
                                                marginLeft: "5px",
                                                cursor: "pointer",
                                              }}
                                            ></i>
                                          )}
                                        </dd>
                                      </dl>
                                      <hr />
                                      <dl className="dlist-align">
                                        <dt>You Pay</dt>
                                        <dd className="text-end ms-auto tx-14">
                                          <strong ref={amountElement}>
                                            {btcamount}
                                          </strong>{" "}
                                          <strong>BTC</strong>
                                          {copiedBtcAmount ? (
                                            <i
                                              className="fa fa-check"
                                              style={{
                                                marginLeft: "5px",
                                                cursor: "pointer",
                                                color: "lightgreen",
                                              }}
                                            ></i>
                                          ) : (
                                            <i
                                              className="fa fa-copy"
                                              onClick={() => {
                                                copyBtcAMount(
                                                  amountElement,
                                                  setcopiedBtcAmount
                                                );
                                              }}
                                              style={{
                                                marginLeft: "5px",
                                                cursor: "pointer",
                                              }}
                                            ></i>
                                          )}
                                        </dd>
                                      </dl>

                                      {/* <Card.Body className=" text-center card-img-top-1 ">
                                                <div>
                                                  <h6 className="card-title">
                                                    Time 1 minute counter
                                                  </h6>
                                                </div>
                                          
                                                <div className="mt-4 bg-secondary text-white p-1 br-5">
                                                  <span
                                                    id="timer-countercallback1"
                                                    className="tx-4 mb-0"
                                                  >
                                                    <Middle />
                                                  </span>
                                                </div>
                                      </Card.Body> */}
                                    </Card.Body>
                                    <Card.Footer>
                                      <Row style={{ alignItems: "center" }}>
                                        <div className="column">
                                          <Button
                                            className="btn btn-primary"
                                            onClick={handleHavePaid}
                                          >
                                            I Have Paid
                                          </Button>
                                        </div>
                                        <br />
                                        <div className="column">
                                          <p
                                            className="mg-b-20 font-weight-bold text-warning"
                                            onClick={handleClose}
                                            style={{ cursor: "pointer" }}
                                          >
                                            Cancel Order
                                          </p>
                                        </div>
                                      </Row>
                                    </Card.Footer>
                                  </Card>
                                  <Form.Group className="form-group mg-b-25">
                                    {/* Your additional form group content */}
                                  </Form.Group>
                                  {/* <Button
                                    variant=""
                                    className="btn btn-primary btn-block"
                                    onClick={handleClose}
                                  >
                                    Continue
                                  </Button> */}
                                </Modal.Body>
                              </Modal>
                            </>
                          </div>
                          {/* </Card.Body>
                          </Card> */}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Fragment>
  );
}
