import React, { useState } from "react";
import { Button, Col, Form, Row, Alert, Tab, Nav, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const SignIn = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "gyima@gmail.com",
    password: "1234567890",
  });
  const baseUrl = "http://localhost:5173";
  const dashboardPath = "/dashboard/dashboard3/";
  const targetUrl = new URL(dashboardPath, baseUrl).toString();

  const navigate = useNavigate();

  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  const isEmpty = Object.values(data).some((value) => value === "");
  const Login1 = () => {
    if (isEmpty) {
      setError("Please Fill input");
    } else {
      axios
        .post("http://localhost:3000/login", data, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data); // Display a message (you can customize this)
          navigate("/dashboard/dashboard3");
        })
        .catch((error) => {
          const erroData = error.response;
          console.log(erroData);
          setError(erroData.data.message);
          console.error("Error:", error);
        });
    }
  };
  return (
    <React.Fragment>
      <div className="square-box"> </div>
      <div className="page bg-primary">
        <div className="page-single">
          <div className="container" style={{ marginTop: "89px" }}>
            <Row>
              <Col lg={5} className="d-block mx-auto login-page">
                <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                  <Card className="rounded-4">
                    <Tab.Content>
                      {/* <Tab.Pane eventKey="firebase">
                        <div className="card-sigin">
                          <div className="main-card-signin d-md-flex mx-auto">
                            <div className="wd-100p">
                              <div className="d-flex mb-4">
                                <Link to="#">
                                  <img
                                    src={imagesData("favicon")}
                                    className="sign-favicon ht-40"
                                    alt="logo"
                                  />
                                </Link>
                              </div>
                              <div className="">
                                <div className="main-signup-header">
                                  <h2>Welcome back!</h2>
                                  <h6 className="font-weight-semibold mb-4">
                                    Please sign in to continue.
                                  </h6>
                                  <div className="panel panel-primary">
                                    <div className=" tab-menu-heading mb-2 border-bottom-0">
                                      <div className="tabs-menu1">
                                        {err && (
                                          <Alert variant="danger">{err}</Alert>
                                        )}
                                        <Form>
                                          <Form.Group className="form-group">
                                            <Form.Label className="">
                                              Email
                                            </Form.Label>{" "}
                                            <Form.Control
                                              className="form-control"
                                              placeholder="Enter your email"
                                              name="email"
                                              type="text"
                                              value={email}
                                              onChange={changeHandler}
                                              required
                                            />
                                          </Form.Group>
                                          <Form.Group className="form-group">
                                            <Form.Label>Password</Form.Label>{" "}
                                            <Form.Control
                                              className="form-control"
                                              placeholder="Enter your password"
                                              name="password"
                                              type="password"
                                              value={password}
                                              onChange={changeHandler}
                                              required
                                            />
                                          </Form.Group>
                                          <Button
                                            variant=""
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                            onClick={Login1}
                                          >
                                            Sign In
                                          </Button>

                                          <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                            <Link
                                              to="https://www.facebook.com/"
                                              target="_blank"
                                              className="btn btn-icon btn-facebook me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.twitter.com/"
                                              target="_blank"
                                              className="btn btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.linkedin.com/"
                                              target="_blank"
                                              className="btn btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.instagram.com/"
                                              target="_blank"
                                              className="btn  btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                          </div>
                                          <div className="main-signin-footer text-center mt-3">
                                            <p>
                                              <Link to="#" className="mb-3">
                                                Forgot password?
                                              </Link>
                                            </p>
                                            <p>
                                              Don't have an account ?{" "}
                                              <Link
                                                to={`${
                                                  import.meta.env.BASE_URL
                                                }/authentication/signup/`}
                                                className=""
                                              >
                                                {" "}
                                                Create an Account
                                              </Link>
                                            </p>
                                          </div>
                                        </Form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane> */}
                      <Tab.Pane eventKey="react">
                        <div className="card-sigin">
                          <div className="main-card-signin d-md-flex">
                            <div className="wd-100p ">
                              <div className="">
                                <div className="main-signup-header">
                                  <h2 className="text-center">Welcome back!</h2>
                                  <h6 className="font-weight-semibold mb-4">
                                    Please sign in to continue.
                                  </h6>
                                  <div className="panel panel-primary">
                                    <div className=" tab-menu-heading mb-2 border-bottom-0">
                                      <div className="tabs-menu1">
                                        {err && (
                                          <Alert variant="danger">{err}</Alert>
                                        )}
                                        <Form>
                                          <Form.Group className="form-group">
                                            <Form.Label>Email</Form.Label>{" "}
                                            <Form.Control
                                              className="form-control"
                                              placeholder="Enter your email"
                                              name="email"
                                              type="text"
                                              value={email}
                                              onChange={changeHandler}
                                              required
                                            />
                                          </Form.Group>
                                          <Form.Group className="form-group">
                                            <Form.Label>Password</Form.Label>{" "}
                                            <Form.Control
                                              className="form-control"
                                              placeholder="Enter your password"
                                              name="password"
                                              type="password"
                                              value={password}
                                              onChange={changeHandler}
                                              required
                                            />
                                          </Form.Group>
                                          <Button
                                            variant=""
                                            className="btn btn-primary btn-block"
                                            onClick={Login1}
                                          >
                                            Sign In
                                          </Button>

                                          <div className="mt-4 d-flex flex-column text-center align-items-center justify-content-center mb-2">
                                            <div>
                                              <p
                                                style={{
                                                  color: "black",
                                                  fontSize: "14px",
                                                }}
                                              >
                                                or sign in with
                                              </p>
                                            </div>
                                            <Link
                                              to="http://127.0.0.1:3000/auth/google"
                                              
                                              className="btn btn-icon btn-facebook me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-google tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            {/* <Link
                                              to="https://www.twitter.com/"
                                              target="_blank"
                                              className="btn btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.linkedin.com/"
                                              target="_blank"
                                              className="btn btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link>
                                            <Link
                                              to="https://www.instagram.com/"
                                              target="_blank"
                                              className="btn  btn-icon me-3"
                                              type="button"
                                            >
                                              <span className="btn-inner--icon">
                                                {" "}
                                                <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                              </span>
                                            </Link> */}
                                          </div>
                                          <div className="main-signin-footer text-center mt-3">
                                            <p>
                                              <Link to="#" className="mb-3">
                                                Forgot password?
                                              </Link>
                                            </p>
                                            <p>
                                              Don't have an account ?{" "}
                                              <Link
                                                to={`${
                                                  import.meta.env.BASE_URL
                                                }authentication/signup/`}
                                                className=""
                                              >
                                                {" "}
                                                Create an Account
                                              </Link>
                                            </p>
                                          </div>
                                        </Form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Card>
                </Tab.Container>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
