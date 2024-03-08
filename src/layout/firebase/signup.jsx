import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
import { Button, Col, Form, FormGroup, Row, Alert } from "react-bootstrap";
import axios from "axios";
// import { imagesData } from "../../common/commonimages";
const SignUp = () => {
  const [err, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [data, setData] = React.useState({
    fullname: "",
    email: "",
    telephone: "",
    password: "",
    confirm_password: "",
  });
  const { fullname, email, telephone, password, confirm_password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Signup = (e) => {
    // e.preventDefault();
    const isEmpty = Object.values(data).some((value) => value === "");
    if (isEmpty) {
      setError("Fill all inputs");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (data.password !== data.confirm_password) {
      setError("password and confirm password are not equal");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const sendMessageEndpoint = "http://localhost:3000/send-message";
      axios
        .post(sendMessageEndpoint, data, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Message sent to the server successfully");
          console.log(response.data); // Display a message (you can customize this)
          setSuccessMsg(response.data.message);
          // navigate("/dashboard/dashboard3");
        })
        .catch((error) => {
          try {
            const erroData = error.response;
            console.log(erroData);
            setError(erroData.data.message);
            setTimeout(() => {
              setError("");
            }, 3000);
            console.error("Error:", error);
          } catch (error) {
            setError("Failed to send message to the server");
          }
        });
    }
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `${import.meta.env.BASE_URL}`;
    navigate(path);
  };
  return (
    <div>
      <div className="page bg-primary">
        <div className="page-single">
          <div className="container">
            <Row>
              <Col
                xl={5}
                lg={6}
                md={8}
                sm={8}
                xs={10}
                className="card-sigin-main py-4 justify-content-center mx-auto"
              >
                <div className="card-sigin ">
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      {/* <div className="d-flex mb-4">
                        <Link to="#">
                          <img
                            src={imagesData("favicon")}
                            className="sign-favicon ht-40"
                            alt="logo"
                          />
                        </Link>
                      </div> */}
                      <div className="">
                        <div className="main-signup-header">
                          <h2 className="text-dark text-center">Get Started</h2>
                          {/* <h6 className="font-weight-normal mb-4 text-red-600">
                            It's free to signup and only takes a minute.
                          </h6> */}
                          {err && <Alert variant="danger">{err}</Alert>}
                          {successMsg && (
                            <Alert variant="success">{successMsg}</Alert>
                          )}

                          <Form>
                            <FormGroup className="form-group">
                              {/* <label>Firstname &amp; Lastname</label>{" "} */}
                              <Form.Control
                                className="form-control"
                                placeholder="Fullname"
                                type="text"
                                name="fullname"
                                value={fullname}
                                onChange={changeHandler}
                              />
                            </FormGroup>
                            <FormGroup className="form-group">
                              {/* <label>Email</label>{" "} */}
                              <Form.Control
                                className="form-control"
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={changeHandler}
                              />
                            </FormGroup>
                            <FormGroup className="form-group">
                              {/* <label>Email</label>{" "} */}
                              <Form.Control
                                className="form-control"
                                placeholder="Telephone"
                                type="tel"
                                name="telephone"
                                value={telephone}
                                onChange={changeHandler}
                              />
                            </FormGroup>
                            <FormGroup className="form-group">
                              {/* <label>Password</label>{" "} */}
                              <Form.Control
                                className="form-control"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={changeHandler}
                              />
                            </FormGroup>
                            <FormGroup className="form-group">
                              {/* <label>Password</label>{" "} */}
                              <Form.Control
                                className="form-control"
                                placeholder="Confirm Password"
                                type="password"
                                name="confirm_password"
                                value={confirm_password}
                                onChange={changeHandler}
                              />
                            </FormGroup>
                            <Button
                              variant=""
                              className="btn btn-primary btn-block"
                              onClick={Signup}
                            >
                              Create Account
                            </Button>

                            <div className="mt-4 d-flex text-center flex-column align-items-center justify-content-center">
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
                            </div>
                            <div className="main-signup-footer mt-3 text-center ">
                              <p>
                                Already have an account?{" "}
                                <Link
                                  to={`${
                                    import.meta.env.BASE_URL
                                  }authentication/login/`}
                                >
                                  Login
                                </Link>
                              </p>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
