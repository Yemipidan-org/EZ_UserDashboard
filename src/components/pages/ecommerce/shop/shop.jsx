import React,{useState, Fragment} from "react";
import { useDispatch } from 'react-redux';
import { ADD } from '../../../../common/redux/action';
import { Link } from "react-router-dom";
import ProductService from "../../../../common/ProductService";
import Select from "react-select";
import {  Button, Card, Col, Form, FormGroup, Pagination, Row, OverlayTrigger,Tooltip, } from "react-bootstrap";
import { OptionBabyKids, OptionElectronics, OptionMens, OptionSportBooksMore, OptionType, OptionWomen, Optioncategory2 } from "../../../../common/selectdata";
import Pageheader from "../../../../layout/layoutcomponent/pageheader";
const Shop = () => {
  const [value, setvalue] = useState("");
  const [Type, setType] = useState("");
  const [Mens, setMens] = useState("");
  const [Women, setWomen] = useState("");
  const [BabyKids, setBabyKids] = useState("");
  const [Electronics, setElectronics] = useState("");
  const [SportBooksMore, setSportBooksMore] = useState("");

  const dispatch = useDispatch();
  const send = (e) => {
    console.log("add to 1");
    dispatch(ADD(e));
  }
  const [list] = React.useState({
    InitialList:ProductService.getProductList2()
  });
  let {InitialList} = list;

  const handleOnchange = () => {
    setvalue(value);
  };

  const handleOnchangeType = () => {
    setType(Type);
  };

  const handleOnchangeMens = () => {
    setMens(Mens);
  };

  const handleOnchangeWomen = () => {
    setWomen(Women);
  };
  
  const handleOnchangeBabyKids = () => {
    setBabyKids(BabyKids);
  };
  
  const handleOnchangeElectronics = () => {
    setElectronics(Electronics);
  };

  const handleOnchangeSportBooksMore = () => {
    setSportBooksMore(SportBooksMore);
  };
  return (
    <Fragment>
         <Pageheader title="SHOP"  heading="Ecommerce"   active="Shop" />

      
      <Row className="row-sm">
        <Col xl={9} lg={8} md={12}>
          <Row className="row-sm">
            {InitialList.map((item, id) => (
              <Col sm={6} xl={4} xxl={3} lg={6} md={6} key={id}>
                <Card>
                  <Card.Body className="h-100  product-grid6">
                    <div className="pro-img-box product-image" >
                      <div onClick={() => { send(item); ProductService.getidfronShop(item.id) }}>
                        <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails/`}>
                          <img className=" pic-1" src={item.pic1} alt="product" />
                          <img className="pic-2" src={item.pic2} alt="product" />
                        </Link>
                      </div>
                      
                      <ul className="icons">
                        <li onClick={() => send(item)}>
                          <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist/`}>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                              <div className="primary-gradient me-2"  ><i className="fa fa-heart"></i></div>
                            </OverlayTrigger>
                          </Link>
                        </li>
                        <li onClick={() => send(item)}>
                          <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart/`}>
                            <OverlayTrigger
                              placement="top"
                              overlay={<Tooltip>Add to Cart</Tooltip>}
                            >
                              <div className="secondary-gradient me-2" >

                                <i className="fa fa-shopping-cart"></i>

                              </div>
                            </OverlayTrigger>
                          </Link>
                        </li>

                        <li>
                        <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails/`}>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Quick View</Tooltip>}
                          >
                            <div className="info-gradient">
                              <i className="fas fa-eye"></i>
                            </div>
                          </OverlayTrigger>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center pt-2">
                      <h3 className="h6 mb-2 mt-4 font-weight-bold text-uppercase">
                        {item.item}
                      </h3>
                      <span className="tx-15 ms-auto">
                        <i className="ion ion-md-star text-warning"></i>
                        <i className="ion ion-md-star text-warning"></i>
                        <i className="ion ion-md-star text-warning"></i>
                        <i className="ion ion-md-star-half text-warning"></i>
                        <i className="ion ion-md-star-outline text-warning"></i>
                      </span>
                      <h4 className="h5 mb-0 mt-1 text-center font-weight-bold  tx-22">
                        {item.prices}{" "}
                        <span className="text-secondary font-weight-normal tx-13 ms-1 prev-price">
                          {item.disc}
                        </span>
                      </h4>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <Pagination className="pagination product-pagination ms-auto float-end">
              <Pagination.Item className="page-item page-prev disabled">
                Prev
              </Pagination.Item>
              <Pagination.Item className="page-item active">1</Pagination.Item>
              <Pagination.Item className="page-item">2</Pagination.Item>
              <Pagination.Item className="page-item">3</Pagination.Item>
              <Pagination.Item className="page-item">4</Pagination.Item>
              <Pagination.Item className="page-item page-next">
                Next
              </Pagination.Item>
            </Pagination>
          </Row>
        </Col>

        <Col xl={3} lg={4} md={12} className="mb-md-0 mb-3">
          <Card>
            <Card.Body className="p-2">
              <div className="input-group">
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                />
                <span className="input-group-append">
                  <Button variant="" className="btn btn-primary" type="button">
                    Search
                  </Button>
                </span>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Colors</h3>
            </Card.Header>
            <Card.Body>
              <Row className="gutters-xs">
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="azure"
                      className="colorinput-input"
                      defaultChecked
                    />
                    <span className="colorinput-color bg-azure"></span>
                  </Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="indigo"
                      className="colorinput-input"
                    />
                    <span className="colorinput-color bg-indigo"></span>
                  </Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="purple"
                      className="colorinput-input"
                    />
                    <span className="colorinput-color bg-purple"></span>
                  </Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="pink"
                      className="colorinput-input"
                    />
                    <span className="colorinput-color bg-pink"></span>
                  </Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="red"
                      className="colorinput-input"
                    />
                    <span className="colorinput-color bg-red"></span>
                  </Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="orange"
                      className="colorinput-input"
                    />
                    <span className="colorinput-color bg-orange"></span>
                  </Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="yellow"
                      className="colorinput-input"
                    />
                    <span className="colorinput-color bg-yellow"></span>
                  </Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="lime"
                      className="colorinput-input"
                    />
                    <span className="colorinput-color bg-lime"></span>
                  </Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="green"
                      className="colorinput-input"
                    />
                    <span className="colorinput-color bg-green"></span>
                  </Form.Label>
                </div>
                <div className="col-auto">
                  <Form.Label className="colorinput">
                    <input
                      name="color"
                      type="radio"
                      value="teal"
                      className="colorinput-input"
                    />
                    <span className="colorinput-color bg-teal"></span>
                  </Form.Label>
                </div>
              </Row>
            </Card.Body>
            <Card>
              <Card.Header className="border-bottom pt-3 pb-3 mb-0 font-weight-bold text-uppercase">
                Category
              </Card.Header>
              <Card.Body className="pb-0">
                <FormGroup>
                  <Form.Label className="form-label">Mens</Form.Label>
                  <Select
                    defaultValue={Mens}
                    onChange={setMens}
                    options={OptionMens}
                    placeholder="select"
                    
                    classNamePrefix="Select2"
                    isSearchable
                  />
                </FormGroup>
                <FormGroup className="form-group mt-2">
                  <Form.Label className="form-label">Women</Form.Label>
                  <Select
                    defaultValue={Women}
                    onChange={setWomen}
                    options={OptionWomen}
                    placeholder="select"
                    
                    classNamePrefix="Select2"
                    isSearchable
                  />
                </FormGroup>
                <FormGroup className="form-group mt-2">
                  <Form.Label className="form-label">Baby & Kids</Form.Label>
                  <Select
                    defaultValue={BabyKids}
                    onChange={setBabyKids}
                    options={OptionBabyKids}
                    placeholder="select"
                    
                    classNamePrefix="Select2"
                    isSearchable
                  />
                </FormGroup>
                <FormGroup className="form-group mt-2">
                  <Form.Label className="form-label">Electronics</Form.Label>
                  <Select
                    defaultValue={Electronics}
                    onChange={setElectronics}
                    options={OptionElectronics}
                    placeholder="select"
                    
                    classNamePrefix="Select2"
                    isSearchable
                  />
                </FormGroup>
                <FormGroup className="form-group mt-2">
                  <Form.Label className="form-label">Sport,Books & More </Form.Label>
                  
                  <Select
                    defaultValue={SportBooksMore}
                    onChange={setSportBooksMore}
                    options={OptionSportBooksMore}
                    placeholder="select"
                    classNamePrefix="Select2"
                    isSearchable
                  />
                </FormGroup>
              </Card.Body>
              <Card.Header className="border-bottom border-top pt-3 pb-3 mb-0 font-weight-bold text-uppercase rounded-0">
                Rating
              </Card.Header>
              <Card.Body>
                <Form>
                  <FormGroup>
                    <Form.Label>Brand</Form.Label>
                    <Select
                    defaultValue={value}
                    onChange={setvalue}
                    options={Optioncategory2}
                    placeholder="select"
                    classNamePrefix="Select2"
                    isSearchable
                  />
                  </FormGroup>
                  <FormGroup>
                    <Form.Label>Type</Form.Label>
                    <Select
                    defaultValue={Type}
                    onChange={setType}
                    options={OptionType}
                    placeholder="select"
                    classNamePrefix="Select2"
                    isSearchable
                  />
                  </FormGroup>
                </Form>
              </Card.Body>
              <Card.Header className="border-bottom border-top pt-3 pb-3 mb-0 font-weight-bold text-uppercase rounded-0">
                Rating
              </Card.Header>
              <div className="py-2 px-3">
                <Form.Label className="p-1 mt-2 d-flex align-items-center">
                  <span className="check-box mb-0">
                    <span className="ckbox">
                      <input defaultChecked type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="ms-3 tx-16 my-auto">
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                  </span>
                </Form.Label>
                <Form.Label className="p-1 mt-2 d-flex align-items-center">
                  <span className="check-box mb-0">
                    <span className="ckbox">
                      <input defaultChecked type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="ms-3 tx-16 my-auto">
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                  </span>
                </Form.Label>
                <Form.Label className="p-1 mt-2 d-flex align-items-center">
                  <span className="check-box mb-0">
                    <span className="ckbox">
                      <input defaultChecked type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="ms-3 tx-16 my-auto">
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                  </span>
                </Form.Label>
                <Form.Label className="p-1 mt-2 d-flex align-items-center">
                  <span className="checkbox mb-0">
                    <span className="check-box">
                      <span className="ckbox">
                        <input type="checkbox" />
                        <span></span>
                      </span>
                    </span>
                  </span>
                  <span className="ms-3 tx-16 my-auto">
                    <i className="ion ion-md-star  text-warning"></i>
                    <i className="ion ion-md-star  text-warning"></i>
                  </span>
                </Form.Label>
                <Form.Label className="p-1 mt-2 d-flex align-items-center">
                  <span className="checkbox mb-0">
                    <span className="check-box">
                      <span className="ckbox">
                        <input type="checkbox" />
                        <span></span>
                      </span>
                    </span>
                  </span>
                  <span className="ms-3 tx-16 my-auto">
                    <i className="ion ion-md-star  text-warning"></i>
                  </span>
                </Form.Label>
                <Button className="btn btn-primary mt-2 mb-2 pb-2" type="submit">
                  Filter
                </Button>
              </div>
            </Card>
          </Card>
        </Col>
      </Row>

     
    </Fragment>
  );
}

Shop.propTypes = {};

Shop.defaultProps = {};

export default Shop;
