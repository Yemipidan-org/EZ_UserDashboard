import { Fragment, useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { ToastContainer } from "react-toastify";
import { Danger1, Danger4 } from "../messagesPopup/messagesFunction";
import * as Switcherdata from "../../common/switcherdata";
import Swal from "sweetalert2";
import Darkmode from "../../components/darkmode/dark";
import axios from "axios";
import LoginSession from "../loginSession/loginsession";
import { useNavigate } from "react-router-dom";

export default function Invest() {
  const minimumInvestmentAmount = 10;
  const walletBalance = 600;

  const [investAmount, setInvestAmount] = useState("");
  const [errMsg, setErrorMessage] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

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

  useEffect(() => {
    LoginSession(setUserId, undefined, navigate, undefined); // Initial fetch
    const pollingInterval = setInterval(() => {
      LoginSession(setUserId, undefined, navigate, undefined); // Fetch data at regular intervals

      // Optional: You can clear the interval if needed
      // clearInterval(pollingInterval);
    }, 5000); // Adjust the interval time (in milliseconds) as needed

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(pollingInterval);
  }, []);
  const sendInvestment = async () => {
    try {
      // Check if the input is a valid number
      if (!isNaN(parseFloat(investAmount)) && isFinite(investAmount)) {
        // Send a POST request to the server to handle the investment
        const response = await axios.post(
          `${apiUrl}/invest`,
          {
            userId: userId, // Replace with the actual user ID
            amount: parseInt(investAmount),
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Check if the request was successful
        if (response.status === 200) {
          // Display success message
          console.log("Investment successful!");
          console.log(response.data); // Log the response data if needed
          // Optionally, you can handle additional logic or UI updates here
        } else {
          // Handle the case where the server returns an error
          console.error(
            "Investment failed. Server returned an error:",
            response.status
          );

          // Log the JSON error response
          console.error("Error details:", response.data);

          // You can log additional error details as needed
          // setErrorMessage(response.data.message || "Investment failed");
          // Danger1(); // Trigger Danger1 function
        }
      } else {
        // setErrorMessage("Invalid input. Please enter a valid number.");
        // Danger1(); // Trigger Danger1 function
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);

      // Handle different types of errors here and log as needed
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
        Danger1(error.response.data); // Trigger Danger1 function
        setErrorMessage("An unexpected error occurred.");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received. Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }

      // setErrorMessage("An unexpected error occurred.");
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
