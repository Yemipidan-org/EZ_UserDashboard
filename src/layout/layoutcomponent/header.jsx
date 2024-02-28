import React, { Fragment, useState, useEffect } from "react";
import { Navbar, Dropdown } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link, useParams, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "../../common/redux/action";
import ProductService from "../../common/ProductService";
import { imagesData } from "../../common/commonimages";
import { MENUITEMS } from "../../common/sidemenu";
import * as Switcherdata from "../../common/switcherdata";
import Darkmode from "../../components/darkmode/dark";

export default function Header() {
  useEffect(() => {
    Switcherdata.localStorageBackUp();
  }, []);

  //Search functionality
  const [show1, setShow1] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [show2, setShow2] = useState(false);
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [searchval, setsearchval] = useState("Type something");
  const [NavData, setNavData] = useState([]);

  document.addEventListener("click", function () {
    document.querySelector(".search-result")?.classList.add("d-none");
  });
  const myfunction = (inputvalue) => {
    document.querySelector(".search-result")?.classList.remove("d-none");

    const i = [];
    const allElement2 = [];

    MENUITEMS.map((mainlevel) => {
      if (mainlevel.Items) {
        setShow1(true);
        mainlevel.Items.map((sublevel) => {
          if (sublevel.children) {
            sublevel.children.map((sublevel1) => {
              i.push(sublevel1);
              if (sublevel1.children) {
                sublevel1.children.map((sublevel2) => {
                  i.push(sublevel2);
                  return sublevel2;
                });
              }
              return sublevel1;
            });
          }
          return sublevel;
        });
      }
      return mainlevel;
    });
    for (const allElement of i) {
      if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
        if (
          allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())
        ) {
          setShow2(true);
          allElement2.push(allElement);
        }
      }
    }
    if (!allElement2.length || inputvalue === "") {
      if (inputvalue === "") {
        setShow2(false);
        setsearchval("Type something");
        setsearchcolor("text-dark p-3");
      }
      if (!allElement2.length) {
        setShow2(false);
        setsearchcolor("text-danger p-3");
        setsearchval("There is no component with this name");
      }
    }
    setNavData(allElement2);
  };

  const [Lang, setLang] = React.useState(false);
  function Fullscreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement === null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  //leftsidemenu
  const openCloseSidebar = () => {
    document.querySelector("body").classList.toggle("sidenav-toggled");
  };
  //rightsidebar
  const Rightsidebar = () => {
    document.querySelector(".sidebar-right").classList.add("sidebar-open");
  };

  // Darkmode()
  // const Darkmode = () => {
  //   if (document.querySelector(".app")?.classList.contains("dark-theme")) {
  //     document.querySelector(".app")?.classList.remove("dark-theme");
  //     localStorage.setItem("nowalighttheme", "false");
  //     localStorage.removeItem("nowadark");

  //     const DarkMenu2 = document.querySelector("#myonoffswitch6"); // light header
  //     if (DarkMenu2) {
  //       DarkMenu2.checked = false;
  //     }
  //     const DarkMenu3 = document.querySelector("#myonoffswitch3"); //light menu
  //     if (DarkMenu3) {
  //       DarkMenu3.checked = false;
  //     }

  //     document.querySelector("#myonoffswitch1").checked = false;
  //   } else {
  //     document.querySelector(".app")?.classList.add("dark-theme");
  //     localStorage.setItem("nowadark", "true");
  //     localStorage.removeItem("nowalighttheme");

  //     const DarkMenu2 = document.querySelector("#myonoffswitch8"); //dark header
  //     if (DarkMenu2) {
  //       DarkMenu2.checked = true;
  //     }
  //     const DarkMenu3 = document.querySelector("#myonoffswitch5"); //dark menu
  //     if (DarkMenu3) {
  //       DarkMenu3.checked = true;
  //     }
  //     document.querySelector("#myonoffswitch2").checked = true;
  //   }
  // };

  useEffect(() => {
    Switcherdata.localStorageBackUp(); // Assuming you want to execute this function as well

    // Call Darkmode function to set the default theme to dark
    Darkmode();
  }, []);

  // responsivesearch
  const responsivesearch = () => {
    document.querySelector(".navbar-form").classList.toggle("active");
  };
  //swichermainright
  const swichermainright = () => {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
    if (
      document.querySelector(".switcher-backdrop")?.classList.contains("d-none")
    ) {
      document.querySelector(".switcher-backdrop")?.classList.add("d-block");
      document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
    }
  };
  const [price, setPrice] = React.useState(0);

  let getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [Data, setData] = React.useState([]);

  const { id } = useParams();

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      console.log(e, id);
      return e.id === id;
    });
    setData(comparedata);
    console.log(comparedata, Data);
  };

  React.useEffect(() => {
    compare();
    // eslint-disable-next-line
  }, [id]);
  const ondelete = (id) => {
    dispatch(Delete(id));
  };

  function total() {
    let price = 0;
    getdata.map((ele) => {
      price = ele.price * ele.qnty + price;
      return price;
    });
    setPrice(price);
  }

  React.useEffect(() => {
    total();
  });
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `${import.meta.env.BASE_URL}`;
    navigate(path);
  };
  return (
    <Fragment>
      <Navbar
        className="main-header side-header sticky nav nav-item"
        style={{ marginBottom: "-63px" }}
      >
        <div className="main-container container-fluid">
          <div className="main-header-left ">
            <div className="responsive-logo">
              <Link
                to={`${import.meta.env.BASE_URL}dashboard/dashboard1/`}
                className="header-logo"
              >
                <img
                  src={imagesData("logo")}
                  className="mobile-logo logo-1"
                  alt="logo"
                />
                <img
                  src={imagesData("logowhite")}
                  className="mobile-logo dark-logo-1"
                  alt="logo"
                />
              </Link>
            </div>
            <div
              className="app-sidebar__toggle"
              data-bs-toggle="sidebar"
              onClick={() => openCloseSidebar()}
            >
              <Link className="open-toggle" to="#">
                <i className="header-icon fe fe-align-left"></i>
              </Link>
              <Link className="close-toggle" to="#">
                <i className="header-icon fe fe-x"></i>
              </Link>
            </div>
            <div className="logo-horizontal">
              <Link
                to={`${import.meta.env.BASE_URL}dashboard/dashboard1/`}
                className="header-logo"
              >
                <img
                  src={imagesData("logo")}
                  className="mobile-logo logo-1"
                  alt="logo"
                />
                <img
                  src={imagesData("logo")}
                  className="mobile-logo dark-logo-1"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="main-header-right">
            <Navbar.Toggle
              className="navresponsive-toggler d-lg-none ms-auto"
              type="button"
            >
              <span className="navbar-toggler-icon fe fe-more-vertical"></span>
            </Navbar.Toggle>
            <div className="mb-0 navbar navbar-expand-lg   navbar-nav-right responsive-navbar navbar-dark p-0">
              <Navbar.Collapse
                className="collapse"
                id="navbarSupportedContent-4"
              >
                <ul className="nav nav-item header-icons navbar-nav-right flex-nowrap">
                  <li className="dropdown nav-item"></li>
                  {/* <li className="dropdown nav-item">
                    <Link
                      to="#"
                      className="new nav-link theme-layout nav-link-bg layout-setting"
                      onClick={() => Darkmode()}
                    >
                      <span className="dark-layout">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="header-icon-svgs"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" />
                        </svg>
                      </span>
                      <span className="light-layout">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="header-icon-svgs"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" />
                        </svg>
                      </span>
                    </Link>
                  </li> */}

                  <li
                    className="nav-item full-screen fullscreen-button"
                    onClick={Fullscreen}
                  >
                    <Link className="new nav-link full-screen-link" to="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-icon-svgs"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z" />
                      </svg>
                    </Link>
                  </li>

                  <Dropdown className=" main-profile-menu nav nav-item nav-link ps-lg-2">
                    <Dropdown.Toggle
                      className="new nav-link profile-user d-flex"
                      variant=""
                    >
                      <img alt="" src={imagesData("female2")} className="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <div className="menu-header-content p-3 border-bottom">
                        <div className="d-flex wd-100p">
                          <div className="main-img-user">
                            <img
                              alt=""
                              src={imagesData("female2")}
                              className=""
                            />
                          </div>
                          <div className="ms-3 my-auto">
                            <h6 className="tx-15 font-weight-semibold mb-0">
                              Teri Dactyl
                            </h6>
                          </div>
                        </div>
                      </div>
                      <Dropdown.Item
                        className="dropdown-item"
                        href={`${import.meta.env.BASE_URL}pages/profile/`}
                      >
                        <i className="far fa-user-circle"></i>Profile
                      </Dropdown.Item>

                      <Dropdown.Item
                        className="dropdown-item"
                        onClick={() => {
                          auth.signOut();
                          routeChange();
                        }}
                      >
                        <i className="far fa-arrow-alt-circle-left"></i> Sign
                        Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </Navbar.Collapse>
            </div>
            <div className="d-flex">
              <Link
                className="demo-icon new nav-link"
                to="#"
                onClick={() => swichermainright()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-icon-svgs fa-spin"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z" />
                  <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Navbar>
      <div className="jumps-prevent" style={{ paddingTop: "63px" }}></div>
    </Fragment>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
