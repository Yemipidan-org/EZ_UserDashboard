import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
import { MENUITEMS } from "../../../common/sidemenu";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { imagesData } from "../../../common/commonimages";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
import {
  COLUMNS3,
  DATATABLE3,
  GlobalFilter,
} from "../../../common/tablesfunctionaldata";
import { Statistics3, Viewers3 } from "../../../common/chartdata";
import { useEffect } from "react";
import { data } from "autoprefixer";
const Dashboard3 = () => {
  const tableInstance = useTable(
    {
      columns: COLUMNS3,
      data: DATATABLE3,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const [userInfo, setUserInfo] = useState({});
  // console.log(MENUITEMS);
  // const itemToFind = "My Wallet";
  // for (const menuItem of MENUITEMS[0].Items) {
  //   if (menuItem.title === itemToFind) {
  //     menuItem.selected = true
  //     menuItem.active = true;
  //     console.log("Item found!");
  //     break;
  //   }
  // }

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const loginSessionResponse = await axios.get(
        "http://localhost:3000/login-session",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(loginSessionResponse.data);

      if (loginSessionResponse.data.loggedIn) {
        const userDataResponse = await axios.get(
          `http://localhost:3000/get-userData/${loginSessionResponse.data.user}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        console.log(userDataResponse.data);
        setUserInfo(userDataResponse.data.user);
      } else {
        // Redirect or handle non-logged-in state
        navigate("/authentication/login/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    const pollingInterval = setInterval(() => {
      fetchData(); // Fetch data at regular intervals

      // Optional: You can clear the interval if needed
      // clearInterval(pollingInterval);
    }, 5000); // Adjust the interval time (in milliseconds) as needed

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(pollingInterval);
  }, []); // The empty dependency array ensures that this effect runs once after the initial render
  function getFirstName(fullName) {
    // Check if fullName is defined before trying to split
    if (fullName) {
      // Split the string at the first occurrence of a whitespace character
      const parts = fullName.split(/\s+/);

      // Check if there's at least one element (meaning there was a space)
      if (parts.length > 0) {
        return parts[0]; // Return the first element (first name)
      }
    }

    // Handle the case where fullName is undefined or no space in the string
    return fullName || ""; // Return the entire string if undefined or no space
  }
  return (
    <Fragment>
      <Pageheader title="DASHBOARD" heading="" active="" />
      <Row>
        <Col sm={12} lg={12} md={12} xxl={7}>
          <Card className=" primay-custom-card1">
            <Card.Body>
              <Row>
                <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                  <div className="text-justified align-items-center">
                    <h2 className="text-dark tx-16 font-weight-semibold mb-3 mt-2">
                      Hi, Welcome Back{" "}
                      <span className="text-primary">
                        {getFirstName(userInfo.name) || "loading..."}
                      </span>
                    </h2>
                    <p className="text-dark tx-12 mb-2 lh-3">
                      {" "}
                      Start your Investment journey now
                    </p>
                    {/* <p className="font-weight-semibold tx-12 mb-4">
                      For billing related queries, contact us through support
                      chat or mail us at team@spruko.com{" "}
                    </p> */}
                    {/* <Button className="btn btn-primary mb-3 shadow" variant="">
                      Upgrade to new Plan
                    </Button> */}
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ justifyContent: "space-between" }}>
        <Col xl={2} lg={3} md={4} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">My Wallet</h6>
                {/* <p className="text-muted card-sub-title">A Basic Message</p> */}
              </div>
              {/* <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12"> */}
              <div className="prime-card">
                <img
                  className="img-fluid"
                  src={imagesData("wallet")}
                  alt=""
                  style={{
                    height: "10em",
                    margin: "1em 0",
                    borderRadius: "2em",
                  }}
                />
              </div>
              {/* </div> */}
              <a href={`/wallet`}>
                <div
                  className="btn ripple btn-primary tx-11"
                  id="swal-basic"
                  // onClick={Basic}
                >
                  click here to see wallet <i className="fa fa-arrow-right"></i>
                </div>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} lg={3} md={4} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Add funds</h6>
                {/* <p className="text-muted card-sub-title">
                  A title with a text under
                </p> */}
              </div>
              <div className="prime-card">
                <img
                  className="img-fluid"
                  src={imagesData("addfund")}
                  alt=""
                  style={{
                    height: "10em",
                    margin: "1em 0",
                    borderRadius: "2em",
                  }}
                />
              </div>
              <a href={`/addfund`}>
                <div
                  className="btn ripple btn-primary tx-11"
                  id="swal-basic"
                  // onClick={Basic}
                >
                  click here to add funds <i className="fa fa-arrow-right"></i>
                </div>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} lg={3} md={4} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Invest</h6>
                {/* <p className="text-muted card-sub-title">A Success Message</p> */}
              </div>
              <div className="prime-card">
                <img
                  className="img-fluid"
                  src={imagesData("invest")}
                  alt=""
                  style={{
                    height: "10em",
                    margin: "1em 0",
                    borderRadius: "1em",
                  }}
                />
              </div>
              <a href={`/invest`}>
                <div
                  className="btn ripple btn-success tx-11"
                  id="swal-success"
                  // onClick={Primaryalert}
                >
                  Click here to invest <i className="fa fa-arrow-right"></i>
                </div>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2} lg={3} md={4} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Withdraw</h6>
                {/* <p className="text-muted card-sub-title">A warning message</p> */}
              </div>
              <div className="prime-card">
                <img
                  className="img-fluid"
                  src={imagesData("withdraw")}
                  alt=""
                  style={{
                    height: "10em",
                    margin: "1em 0",
                    borderRadius: "2em",
                  }}
                />
              </div>
              <a href={`/withdraw_fund`}>
                <div
                  className="btn ripple btn-success tx-11"
                  id="swal-warning"
                  // onClick={Warningalert}
                >
                  Click here to withdraw <i className="fa fa-arrow-right"></i>
                </div>
              </a>
            </Card.Body>
          </Card>
        </Col>{" "}
        <Col xl={2} lg={3} md={4} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Bonus</h6>
                {/* <p className="text-muted card-sub-title">A warning message</p> */}
              </div>
              <div className="prime-card">
                <img
                  className="img-fluid"
                  src={imagesData("bonus")}
                  alt=""
                  style={{
                    height: "10em",
                    margin: "1em 0",
                    borderRadius: "2em",
                  }}
                />
              </div>
              <div
                className="btn ripple btn-success tx-11"
                id="swal-warning"
                // onClick={Warningalert}
              >
                Click here to get Bonus <i className="fa fa-arrow-right"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

Dashboard3.propTypes = {};

Dashboard3.defaultProps = {};

export default Dashboard3;
