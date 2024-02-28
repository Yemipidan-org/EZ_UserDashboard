import React, { useState } from "react";
import { Button, Col, Form, Row, Alert, Tab, Nav, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { imagesData } from "../../common/commonimages";

const SignIn = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "gyima@gmail.com",
    password: "1234567890",
  });

  const [apiUserData, setApiUserData] = useState([]);

  // useEffect(() => {
  // Fetch user data from the API
  fetch("https://649ac56abf7c145d023971ee.mockapi.io/api/V1/Users")
    .then((response) => response.json())
    .then((userData) => setApiUserData(userData))
    .catch((error) => console.error("Error fetching user data:", error));
  // }, []);

  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  let navigate = useNavigate();
  const routeChange = (email, name) => {
    let path = `${import.meta.env.BASE_URL}dashboard/dashboard3/`;
    path += `?email=${encodeURIComponent(email)}&name=${encodeURIComponent(
      name
    )}`;
    navigate(path);
  };

  const Login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        routeChange();
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  const Login1 = () => {
    // const matchingUser = apiUserData.find(
    //   (user) => user.Email === email && user.Passord === password
    // );
    // if (matchingUser) {
      // console.log(matchingUser);
      routeChange(data.email, data.password);
    // } else {
    //   setError("Invalid email or password");
    // }
    // if (data.email == "adminreact@gmail.com" && data.password == "1234567890") {
    //   routeChange();
    // } else {
    //   setError("The Auction details did not Match");
    //   setData({
    //     email: "adminreact@gmail.com",
    //     password: "1234567890",
    //   });
    // }
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
                    <Nav
                      variant="pills"
                      className="justify-content-center authentication-tabs"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="react">
                          <img src={imagesData("react")} alt="logo2" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="firebase">
                          {" "}
                          <img src={imagesData("firebase")} alt="logo1" />
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="firebase">
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
                                            onClick={Login}
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
                      </Tab.Pane>
                      <Tab.Pane eventKey="react">
                        <div className="card-sigin">
                          <div className="main-card-signin d-md-flex">
                            <div className="wd-100p ">
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
                                              <Link to="" className="">
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
