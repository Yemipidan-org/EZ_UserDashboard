import { Fragment, useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { ToastContainer } from "react-toastify";
import { Danger1, Danger4 } from "../messagesPopup/messagesFunction";
import * as Switcherdata from "../../common/switcherdata";
import Swal from "sweetalert2";
import Darkmode from "../../components/darkmode/dark";

export default function Invest() {
  const minimumInvestmentAmount = 500;
  const walletBalance = 600;

  const [investAmount, setInvestAmount] = useState("");
  const [errMsg, setErrorMessage] = useState("");
  const apiUrl = "http://localhost:3000"; // Update with your backend server URL

  function Warningalert() {
    Swal.fire({
      title: `Confirm $${investAmount} investment`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        
        if (errMsg === "An unexpected error occurred.") {
          Danger1("Failed to invest");
        } else {
          Swal.fire(
            "Confirmed!",
            "Investment has been successfully deducted from your wallet.",
            "success"
          );
          sendInvestment();
        }
      }
    });
  }

  const handleInvest = () => {
    if (!investAmount) {
      Danger1("Please enter amount");
    } else if (investAmount < minimumInvestmentAmount) {
      Danger1("The minimum amount you can invest is $500");
    } else if (walletBalance < minimumInvestmentAmount) {
      Danger1("Insufficient money in wallet");
    } else {
      // Danger4("Investment successful");
      Warningalert();
    }
  };

  const sendInvestment = async () => {
    try {
      // Check if the input is a valid number
      if (!isNaN(parseFloat(investAmount)) && isFinite(investAmount)) {
        // Send a POST request to the server to handle the investment
        const response = await fetch(`${apiUrl}/invest`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: "guw8xD4HglurQCx48Zob", // Replace with the actual user ID
            amount: investAmount,
          }),
        });

        // Check if the request was successful
        if (response.ok) {
          // Display success message
          console.log("Investment successful!");
          // setSuccessMsg("Investment success");

          // Optionally, you can handle additional logic or UI updates here
        } else {
          // Handle the case where the server returns an error
          const errorData = await response.json();
          // setErrorMessage(errorData.message || "Investment failed");
          Danger1(); // Trigger Danger1 function
        }
      } else {
        // setErrorMessage("Invalid input. Please enter a valid number.");
        Danger1(); // Trigger Danger1 function
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An unexpected error occurred.");
      // Danger1("An unexpected error occurred."); // Trigger Danger1 function
    }
  };

  useEffect(() => {
    Switcherdata.localStorageBackUp(); // Assuming you want to execute this function as well

    // Call Darkmode function to set the default theme to dark
    Darkmode();
  }, []);
  return (
    <Fragment>
      <Pageheader title="INVEST" heading="Dashboard" active="Invest" />
      <ToastContainer />
      <Row>
        <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
          <Row>
            <Col xl={12} lg={12} md={12} xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xl={9} lg={7} md={6} sm={12}>
                      <div className="text-justified align-items-center">
                        <h3 className="text-dark tx-16 font-weight-semibold mb-2 mt-0">
                          Invest from your wallet now and get your return after
                          30 days
                        </h3>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              {/* <Card.Header> */}
              <h6>
                <span className="text-warning">Note:</span> Minimum Amount you
                can invest is $500
              </h6>
              {/* </Card.Header> */}
              <Row>
                <Col lg={12}>
                  <div className=" p-2">
                    <Form.Group
                      className="form-group"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Form.Control
                        placeholder="Enter $X to invest"
                        type="text"
                        value={investAmount}
                        onChange={(e) => setInvestAmount(e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      variant=""
                      className="btn btn-primary pd-x-20"
                      onClick={handleInvest}
                    >
                      Invest
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
