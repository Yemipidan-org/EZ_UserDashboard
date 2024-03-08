import React, { useState } from "react";
import { Button, Col, Form, Row, Alert, Tab, Nav, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { imagesData } from "../../common/commonimages";
import axios from "axios";
import { Fragment } from "react";

const SignIn = () => {
  const [cookieValue, setCookieValue] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    // Add more inputs as needed
  });

  const setCookie = (event) => {
    const { name, value } = event.target;
    // Create a FormData object to handle the request body
    console.log("Input values:", inputValues);

    // Make a request to the "/set-cookie" route using Fetch API with credentials
    axios
      .post("http://localhost:3000/login", inputValues, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data); // Display a message (you can customize this)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getCookie = () => {
    // Make a request to the "/get-cookie" endpoint to get the cookie value
    fetch("http://localhost:3000/another-route", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((value) => {
        if (value) {
          setCookieValue(value);
        } else {
          setCookieValue("Cookie not found");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const submitLoginForm = () => {
    // Add your login form submission logic here
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const naigate = useNavigate();

  const goSignUp = () => {
    naigate("/signup");
  };
  return (
    <>
      <main>
        <button onClick={getCookie}>Get Cookie</button>
        <p id="cookieValue">{cookieValue}</p>
        <div className="uk-section uk-section-secondary uk-light uk-padding-remove-vertical">
          <div className="uk-container uk-container-expand">
            <div className="uk-grid" data-uk-height-viewport="expand: true">
              <div
                className="uk-width-3-5@m uk-background-cover uk-background-center-right uk-visible@m uk-box-shadow-xlarge"
                style={{
                  backgroundImage: "url(img/in-signin-image.jpg)",
                  width: "50%",
                }}
              ></div>
              <div className="uk-width-expand@m uk-flex uk-flex-middle">
                <div className="uk-grid uk-flex-center">
                  <div className="uk-width-3-5@m">
                    <div className="uk-text-center in-padding-horizontal@s">
                      <a className="uk-logo" href="index.html">
                        <img
                          src="img/in-lazy.gif"
                          data-src="img/user/header-logo-6ohuZh.svg"
                          alt="logo"
                          width="160"
                          height="34"
                          data-uk-img
                        />
                      </a>
                      <p className="uk-text-lead uk-margin-small-top uk-margin-medium-bottom">
                        Log into your account
                      </p>

                      <form
                        className="uk-grid uk-form"
                        method="post"
                        id="login-form"
                      >
                        <div className="uk-margin-small uk-width-1-1 uk-inline">
                          <span className="uk-form-icon uk-form-icon-flip fas fa-envelope fa-sm"></span>
                          <input
                            className="uk-input uk-border-rounded"
                            id="email"
                            value={inputValues.email}
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="uk-margin-small uk-width-1-1 uk-inline">
                          <span className="uk-form-icon uk-form-icon-flip fas fa-lock fa-sm"></span>
                          <input
                            className="uk-input uk-border-rounded"
                            id="password"
                            name="password"
                            value={inputValues.password}
                            type="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="uk-margin-small uk-width-expand uk-text-small">
                          <label className="uk-align-left">
                            <a className="uk-link-reset" href="#">
                              Forgot password?
                            </a>
                          </label>
                        </div>
                        <div className="uk-margin-small uk-width-1-1">
                          <button
                            className="uk-button uk-width-1-1 uk-button-primary uk-border-rounded uk-float-left"
                            type="button"
                            onClick={setCookie}
                          >
                            Sign in
                          </button>
                        </div>

                        <div className="uk-margin-small uk-width-1-1">
                          <div
                            className="uk-alert"
                            id="errorCont"
                            style={{
                              display: "none",
                              padding: "8px 0",
                              color: "rgb(0, 145, 255)",
                            }}
                            data-uk-alert
                          >
                            <p id="errorMessage"></p>
                          </div>
                        </div>
                      </form>

                      <p className="uk-heading-line">
                        <span>Or sign in with</span>
                      </p>
                      <div className="uk-margin-medium-bottom">
                        <a
                          className="uk-button uk-button-small uk-border-rounded color-google"
                          href="http://127.0.0.1:3000/auth/google"
                        >
                          <i className="fab fa-google uk-margin-small-right"></i>
                          Google
                        </a>
                      </div>
                      <span className="uk-text-small">
                        Don't have an account?
                        <a href="#" onClick={goSignUp}>
                          Register here
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
