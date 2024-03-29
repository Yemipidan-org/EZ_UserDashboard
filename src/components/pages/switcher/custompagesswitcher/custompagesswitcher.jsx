import React, { useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Switcherdatacustam from "../../../../common/switcherdatacustam";
export default function Custompagesswitcher() {
  useEffect(() => {
    Switcherdatacustam.localStorageBackUp();
  }, []);

  function changePrimaryColor() {
    var userColor = document.getElementById("colorID").value;
    localStorage.setItem("primaryColor", userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem("primaryHoverColor", userColor + 95);
    localStorage.setItem("primaryBorderColor", userColor);
    localStorage.setItem("primaryTransparent", userColor + 20);

    const dynamicPrimaryLight = document.querySelectorAll(
      "input.color-primary-light"
    );
    document.getElementById("myonoffswitch1").checked = true;
    Switcherdatacustam.dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);

    // Adding
    document.querySelector("body")?.classList.add("light-theme");

    // Removing
    document.querySelector("body")?.classList.remove("dark-theme");

    localStorage.removeItem("darkPrimaryColor");

    Switcherdatacustam.name();
  }
  function darkPrimaryColor() {
    var userColor = document.getElementById("darkPrimaryColorID").value;

    localStorage.setItem("darkPrimaryColor", userColor);

    const dynamicPrimaryDark = document.querySelectorAll(
      "input.color-primary-dark"
    );

    Switcherdatacustam.dynamicDarkPrimaryColor(dynamicPrimaryDark, userColor);

    document.getElementById("myonoffswitch2").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("dark-theme");

    // Removing
    document.querySelector("body")?.classList.remove("light-theme");
    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");

    Switcherdatacustam.name();
  }
  return (
    <div className="switcher-wrapper">
      <div className="demo_changer">
        <div className="form_holder sidebar-right1">
          <Row>
            <div className="predefined_styles">
              <div className="swichermainleft text-center">
                <div className="p-3 d-grid gap-2">
                  <Link
                    to="https://react.spruko.com/nowa/"
                    className="btn ripple btn-primary mt-0"
                  >
                    View Demo
                  </Link>
                  <Link
                    to="https://themeforest.net/item/nowa-react-js-admin-dashboard-template/39360388"
                    className="btn ripple btn-info"
                  >
                    Buy Now
                  </Link>
                  <Link
                    to="https://themeforest.net/user/spruko/portfolio"
                    className="btn ripple btn-danger"
                  >
                    Our Portfolio
                  </Link>
                </div>
              </div>
              <div className="swichermainleft text-center">
                <h4>LTR AND RTL VERSIONS</h4>
                <div className="skin-body">
                  <div className="switch_section">
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">LTR</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch25"
                          id="myonoffswitch54"
                          onClick={() => Switcherdatacustam.RtltoLtr()}
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch54"
                          className="onoffswitch2-label"
                        ></label>
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">RTL</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch25"
                          id="myonoffswitch55"
                          onClick={() => Switcherdatacustam.LtrtoRtl()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch55"
                          className="onoffswitch2-label"
                        ></label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swichermainleft">
                <h4>Light Theme Style</h4>
                <div className="skin-body">
                  <div className="switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto">Light Theme</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch1"
                          id="myonoffswitch1"
                          onClick={() => Switcherdatacustam.LightTheme()}
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch1"
                          className="onoffswitch2-label"
                        ></label>
                      </p>
                    </div>
                    <div className="switch-toggle d-flex">
                      <span className="me-auto">Light Primary</span>
                      <div className="">
                        <input
                          className="wd-25 ht-25 input-color-picker color-primary-light"
                          defaultValue="#38CAB3"
                          id="colorID"
                          onChange={(e) => changePrimaryColor(e.target.value)}
                          type="color"
                          data-id="bg-color"
                          data-id1="bg-hover"
                          data-id2="bg-border"
                          data-id7="transparentcolor"
                          name="lightPrimary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swichermainleft">
                <h4>Dark Theme Style</h4>
                <div className="skin-body">
                  <div className="switch_section">
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Dark Theme</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch1"
                          id="myonoffswitch2"
                          onClick={() => Switcherdatacustam.dark()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch2"
                          className="onoffswitch2-label"
                        ></label>
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Dark Primary</span>
                      <div className="">
                        <input
                          className="wd-25 ht-25 input-dark-color-picker color-primary-dark"
                          defaultValue="#38CAB3"
                          id="darkPrimaryColorID"
                          onInput={() => darkPrimaryColor()}
                          type="color"
                          data-id="bg-color"
                          data-id1="bg-hover"
                          data-id2="bg-border"
                          data-id3="primary"
                          data-id8="transparentcolor"
                          name="darkPrimary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swichermainleft">
                <h4>Reset All Styles</h4>
                <div className="skin-body">
                  <div className="switch_section my-4">
                    <Button
                      variant=""
                      className="btn btn-danger btn-block"
                      onClick={() => {
                        localStorage.clear();
                        document.querySelector("html").style = "";
                        Switcherdatacustam.name();
                        Switcherdatacustam.resetData();
                      }}
                      type="button"
                    >
                      Reset All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}
