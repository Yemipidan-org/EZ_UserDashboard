import React, { Fragment, useEffect, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { Col, Row, Card, ListGroup, Tab, Tabs, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as chart from "../../common/chartdata";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { COLUMNS1, DATATABLE2 } from "../../common/tablesfunctionaldata";
import { Line } from "react-chartjs-2";
import * as Switcherdata from "../../common/switcherdata";
import Darkmode from "../darkmode/dark";
import LoginSession, { GetFirstName } from "../loginSession/loginsession";

export default function Wallet() {
  const [walletData, setWalletData] = useState({});
  const [investments, setInvestments] = useState({});
  const navigate = useNavigate();

  const tableInstance = useTable(
    {
      columns: COLUMNS1,
      data: DATATABLE2,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { state } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  useEffect(() => {
    Switcherdata.localStorageBackUp(); // Assuming you want to execute this function as well

    // Call Darkmode function to set the default theme to dark
    Darkmode();
  }, []);

  const [userInfo, setUserInfo] = useState({});
  const [deposits, setDepositsData] = useState({});
  const [allInvestments, setAllInvestments] = useState({});

  // LoginSession(setUserId);
  useEffect(() => {
    LoginSession(
      undefined,
      setUserInfo,
      navigate,
      setWalletData,
      setInvestments,
      setDepositsData,
      setAllInvestments
    );

    const pollingInterval = setInterval(() => {
      LoginSession(
        undefined,
        setUserInfo,
        navigate,
        setWalletData,
        setInvestments,
        setDepositsData,
        setAllInvestments
      ); // Fetch data at regular intervals

      // Optional: You can clear the interval if needed
      // clearInterval(pollingInterval);
    }, 5000); // Adjust the interval time (in milliseconds) as needed

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(pollingInterval);
  }, []);

  console.log(allInvestments);

  return (
    <Fragment>
      <Pageheader title="WALLET" heading="Dashboard" active="Wallet" />
      <Row>
        <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
          <Row>
            <Col xl={12} lg={12} md={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xl={9} lg={7} md={6} sm={12}>
                      <div className="text-justified align-items-center">
                        <h3 className="text-dark tx-16   font-weight-semibold mb-2 mt-0">
                          Hi{" "}
                          <span className="text-primary">
                            {GetFirstName(userInfo.name) || "loading..."}
                          </span>
                          , Welcome to your Wallet
                        </h3>
                        {/* <p className="text-dark tx-14 mb-3 lh-3">
                          You can track some of your activities in here
                        </p> */}
                        {/* <Button variant="" className="btn btn-primary shadow">
                          Upgrade Now
                        </Button> */}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>{" "}
      <Row>
        <Col xs={12} lg={3} xl={3} md={12}>
          <Card className="sales-card circle-image1" style={{ height: "9em" }}>
            <Row>
              <div className="col-8">
                <div className="ps-4 pt-4 pe-3 pb-4">
                  <div className="">
                    <h6 className="mb-2 tx-12 ">Current Wallet Ballance</h6>
                  </div>
                  <div className="pb-0 mt-0">
                    <div className="d-flex">
                      <h4 className="tx-20 font-weight-semibold mt-3">
                        ${walletData.wallet_balance || 0}
                      </h4>
                    </div>
                    {/* <p className="mb-0 tx-12 text-muted">
                      Last week
                      <i className="fa fa-caret-up mx-2 text-success"></i>
                      <span className="text-success font-weight-semibold">
                        {" "}
                        +427
                      </span>
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="circle-icon bg-primary-transparent text-center align-self-center overflow-hidden">
                  <i className="fe fe-shopping-bag tx-16 text-primary"></i>
                </div>
              </div>
            </Row>
          </Card>
        </Col>
        {/* investment_in_progress: */}
        {walletData.investment_in_progress ? (
          <>
            <Col xs={12} lg={3} xl={3} md={12}>
              <Card
                className="sales-card circle-image2"
                style={{ height: "9em" }}
              >
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">
                          Amount Invested @ 8% per 30 days
                        </h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mt-3">
                            ${investments[0]?.amount || "..."}
                          </h4>
                        </div>
                        {/* <p className="mb-0 tx-12 text-muted">
                      Last week
                      <i className="fa fa-caret-down mx-2 text-danger"></i>
                      <span className="font-weight-semibold text-danger">
                        {" "}
                        -453
                      </span>
                    </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-info-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-dollar-sign tx-16 text-info"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xs={12} lg={3} xl={3} md={12}>
              <Card
                className="sales-card circle-image3"
                style={{ height: "9em" }}
              >
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">
                          Expected total Amount in 30 days
                        </h6>
                      </div>
                      <div className="pb-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mt-3">
                            ${investments[0]?.amount_in_return || "..."}
                          </h4>
                        </div>
                        {/* <p className="mb-0 tx-12 text-muted">
                      Last week
                      <i className="fa fa-caret-up mx-2 text-success"></i>
                      <span className=" text-success font-weight-semibold">
                        {" "}
                        +788
                      </span>
                    </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-secondary-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-external-link tx-16 text-secondary"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xs={12} lg={3} xl={3} md={12}>
              <Card
                className="sales-card circle-image4"
                style={{ height: "9em" }}
              >
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">R.O.I as at today</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-22 font-weight-semibold mt-3">
                            ${investments[0]?.roi}
                          </h4>
                        </div>
                        <p className="mb-0 tx-12  text-muted">
                          {/* <i className="fa fa-caret-down mx-2 text-danger"></i> */}
                          {/* <span className="text-danger font-weight-semibold">
                        {" "}
                        -693
                      </span> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-credit-card tx-16 text-warning"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
          </>
        ) : (
          <>
            <Col xs={12} lg={3} xl={3} md={12}>
              <Card
                className="sales-card circle-image2"
                style={{ height: "9em" }}
              >
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Amount Invested @ 8%</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mt-3">
                            $0
                          </h4>
                        </div>
                        {/* <p className="mb-0 tx-12 text-muted">
                      Last week
                      <i className="fa fa-caret-down mx-2 text-danger"></i>
                      <span className="font-weight-semibold text-danger">
                        {" "}
                        -453
                      </span>
                    </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-info-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-dollar-sign tx-16 text-info"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xs={12} lg={3} xl={3} md={12}>
              <Card
                className="sales-card circle-image3"
                style={{ height: "9em" }}
              >
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Expected Amount</h6>
                      </div>
                      <div className="pb-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mt-3">
                            $0
                          </h4>
                        </div>
                        {/* <p className="mb-0 tx-12 text-muted">
                      Last week
                      <i className="fa fa-caret-up mx-2 text-success"></i>
                      <span className=" text-success font-weight-semibold">
                        {" "}
                        +788
                      </span>
                    </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-secondary-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-external-link tx-16 text-secondary"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xs={12} lg={3} xl={3} md={12}>
              <Card
                className="sales-card circle-image4"
                style={{ height: "9em" }}
              >
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">R.O.I as at today</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-22 font-weight-semibold mt-3">
                            $0
                          </h4>
                        </div>
                        <p className="mb-0 tx-12  text-muted">
                          {/* <i className="fa fa-caret-down mx-2 text-danger"></i> */}
                          {/* <span className="text-danger font-weight-semibold">
                        {" "}
                        -693
                      </span> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-credit-card tx-16 text-warning"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
          </>
        )}
      </Row>
      {/* <Card.Header style={{ marginBottom: "1em" }}>
        <h3 className="card-title mb-2">Pending Investment</h3>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12} lg={3} xl={3} md={12}>
            <Card
              className="sales-card circle-image2"
              style={{ height: "9em" }}
            >
              <Row>
                <div className="col-8">
                  <div className="ps-4 pt-4 pe-3 pb-4">
                    <div className="">
                      <h6 className="mb-2 tx-12">Amount Invested @ 10%</h6>
                    </div>
                    <div className="pb-0 mt-0">
                      <div className="d-flex">
                        <h4 className="tx-20 font-weight-semibold mb-2">
                          $100
                        </h4>
                      </div>
              
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="circle-icon bg-info-transparent text-center align-self-center overflow-hidden">
                    <i className="fe fe-dollar-sign tx-16 text-info"></i>
                  </div>
                </div>
              </Row>
            </Card>
          </Col>

          <Col xs={12} lg={3} xl={3} md={12}>
            <Card
              className="sales-card circle-image3"
              style={{ height: "9em" }}
            >
              <Row>
                <div className="col-8">
                  <div className="ps-4 pt-4 pe-3 pb-4">
                    <div className="">
                      <h6 className="mb-2 tx-12">Expected Amount</h6>
                    </div>
                    <div className="pb-0 mt-0">
                      <div className="d-flex">
                        <h4 className="tx-20 font-weight-semibold mb-2">
                          $110
                        </h4>
                      </div>
              
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="circle-icon bg-secondary-transparent text-center align-self-center overflow-hidden">
                    <i className="fe fe-external-link tx-16 text-secondary"></i>
                  </div>
                </div>
              </Row>
            </Card>
          </Col>
          <Col xs={12} lg={3} xl={3} md={12}>
            <Card
              className="sales-card circle-image4"
              style={{ height: "9em" }}
            >
              <Row>
                <div className="col-8">
                  <div className="ps-4 pt-4 pe-3 pb-4">
                    <div className="">
                      <h6 className="mb-2 tx-12">R.O.I as at today</h6>
                    </div>
                    <div className="pb-0 mt-0">
                      <div className="d-flex">
                        <h4 className="tx-22 font-weight-semibold mb-2">$0</h4>
                      </div>
                      <p className="mb-0 tx-12  text-muted">
                    
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                    <i className="fe fe-credit-card tx-16 text-warning"></i>
                  </div>
                </div>
              </Row>
            </Card>
          </Col>
        </Row>
        <Button className="btn btn-primary mb-3 shadow" variant="">
                      More investment
                    </Button>
      </Card.Body> */}
      <Col xl={12}>
        <div className="card mg-b-20" id="tabs-style2">
          <Card.Header className=" pb-1">
            <h3 className="card-title mb-2">Recent Transactions</h3>
          </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="panel panel-primary tabs-style-2">
                  <div className=" tab-menu-heading">
                    <div className="tabs-menu1">
                      <Tabs
                        defaultActiveKey="Tab 01"
                        className=" panel-tabs main-nav-line  bd-b-0 mb-0"
                      >
                        <Tab eventKey="Tab 01" title="Deposit">
                          <div
                            className="panel-body tabs-menu-body main-content-body-right"
                            id="tab4"
                          >
                            {Array.isArray(deposits) &&
                            deposits.length === 0 ? (
                              <div className="text-center">No deposits</div>
                            ) : (
                              Array.isArray(deposits) &&
                              deposits.map((deposits) => (
                                <ListGroup className="list-lg-group list-group-flush">
                                  <Link to="#" className="border-0">
                                    <ListGroup.Item className="list-group-item-action border-0">
                                      <div className="media mt-0 flex-wrap">
                                        <span className="me-3 bg-primary-transparent text-primary transaction-icon">
                                          <i className="fe fe-chevrons-down"></i>
                                        </span>
                                        <div className="media-body">
                                          <div className="d-flex align-items-center">
                                            <div className="mt-0">
                                              <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                                <span className="me-3">
                                                  {deposits?.transaction_id}
                                                </span>
                                              </h5>
                                              <p className="mb-0 tx-12 text-muted">
                                                {deposits?.formatted_date}
                                              </p>
                                            </div>
                                            <span className="ms-auto wd-25p tx-12">
                                              {deposits?.status ===
                                              "pending" ? (
                                                <span className="text-danger tx-11 text-end d-block">
                                                  {deposits?.status}
                                                </span>
                                              ) : (
                                                <span className="text-success tx-11 text-end d-block">
                                                  {deposits?.status}
                                                </span>
                                              )}

                                              <span className="float-end text-success font-weight-semibold">
                                                ${deposits?.usd_amount}
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </ListGroup.Item>
                                  </Link>
                                </ListGroup>
                              ))
                            )}
                          </div>
                        </Tab>
                        <Tab eventKey="Tab 02" title="Investment">
                          <div
                            className="panel-body tabs-menu-body main-content-body-right "
                            id="tab5"
                          >
                            {Array.isArray(allInvestments) &&
                            allInvestments.length === 0 ? (
                              <div className="text-center">No investments</div>
                            ) : (
                              Array.isArray(allInvestments) &&
                              allInvestments.map((investments) => (
                                <ListGroup className="list-lg-group list-group-flush">
                                  <Link to="#" className="border-0">
                                    <ListGroup.Item className="list-group-item-action border-0">
                                      <div className="media mt-0 flex-wrap">
                                        <span className="me-3 bg-primary-transparent text-warning transaction-icon">
                                          <i className="fe fe-trending-up"></i>
                                        </span>
                                        <div className="media-body">
                                          <div className="d-flex align-items-center">
                                            <div className="mt-0">
                                              <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                                <span className="me-3">
                                                  {investments?.investment_id}
                                                </span>
                                              </h5>
                                              <p className="mb-0 tx-12 text-muted">
                                                {investments?.formatted_date}
                                              </p>
                                            </div>
                                            <span className="ms-auto wd-25p tx-12">
                                              {investments?.status ===
                                              "active" ? (
                                                <span className="text-danger tx-11 text-end d-block">
                                                  ongoing
                                                </span>
                                              ) : (
                                                <span className="text-success tx-11 text-end d-block">
                                                  {investments?.status}
                                                </span>
                                              )}
                                              <span className="float-end text-success font-weight-semibold">
                                                {investments?.amount_in_return}
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </ListGroup.Item>
                                  </Link>
                                </ListGroup>
                              ))
                            )}
                          </div>
                        </Tab>
                        <Tab eventKey="Tab 03" title="Withdrawal">
                          <div
                            className="panel-body tabs-menu-body main-content-body-right "
                            id="tab6"
                          >
                            <div className="text-center">No Withdrawals</div>

                            {/* <ListGroup className="list-lg-group list-group-flush">
                              <Link to="#" className="border-0">
                                <ListGroup.Item className="list-group-item-action border-0">
                                  <div className="media mt-0 flex-wrap">
                                    <span className="me-3 bg-secondary-transparent text-secondary transaction-icon">
                                      <i className="fe fe-chevrons-up"></i>
                                    </span>
                                    <div className="media-body">
                                      <div className="d-flex align-items-center">
                                        <div className="mt-0">
                                          <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                                            <span className="me-3">
                                              Deposit
                                            </span>
                                          </h5>
                                          <p className="mb-0 tx-12 text-muted">
                                            24-08-2021
                                          </p>
                                        </div>
                                        <span className="ms-auto wd-25p tx-12">
                                          <span className="text-danger tx-11 text-end d-block">
                                            Pending
                                          </span>
                                          <span className="float-end text-success font-weight-semibold">
                                            $256,347
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </ListGroup.Item>
                              </Link>
                            </ListGroup> */}
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </div>
      </Col>
      <Row className="row-sm">
        <Col sm={12} md={6}>
          <Card className="overflow-hidden w-100">
            {" "}
            {/* Add the w-100 class to make the Card 100% width */}
            <Card.Body>
              <div className="main-content-label mg-b-5">Investment Chart</div>
              {/* <p className="mg-b-20">Basic Charts Of Nowa template.</p> */}
              <div className="chartjs-wrapper-demo">
                <Line
                  options={chart.Linechart}
                  data={chart.linechartdata}
                  height={200}
                  id="chartLine1"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* <Col sm={12} md={6}>
          <Card className=" overflow-hidden">
            <Card.Body>
              <div className="main-content-label mg-b-5">Area Chart</div>
              <p className="mg-b-20">Basic Charts Of Nowa template.</p>
              <div className="chartjs-wrapper-demo">
                <Line
                  options={chart.Areachart}
                  data={chart.areachart}
                  height={130}
                  className="barchart"
                />
              </div>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Fragment>
  );
}
