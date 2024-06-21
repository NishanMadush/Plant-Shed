
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "../../../assets/images/user.png";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Logo from "../../../assets/images/logo.png";

const initialState = {
  service_id: "",
  vehicle_number: "",
  vehicle_name: "",
  serviced_date: "",
  discription: "",
  cost: "",
  next_date: "",
};

class AddService extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    let ServiceDetails = {
      service_id: this.state.service_id,
      vehicle_number: this.state.vehicle_number,
      vehicle_name: this.state.vehicle_name,
      serviced_date: this.state.serviced_date,
      discription: this.state.discription,
      cost: this.state.cost,
      next_date: this.state.next_date,
    };

    axios.post(`${APIURL}/service/add_service_details`, ServiceDetails).then((res) => {
      console.log("res", res);

      if (res.data.code === 200) {
        toast.success(res.data.message);
        //this.props.history.push("/get-all-vehicle");
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    });
  }

  
  render() {
    return (
      <div>
        <header id="home"></header>
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <br />
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="/vehicle-dash"
            >
              <div
                className="sidebar-brand-icon rotate-n-0"
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 140,
                  marginBottom: 100,
                }}
              >
                <img src={Logo} alt="" />
              </div>
              <div className="sidebar-brand-text mx-3"></div>
            </a>
            <br />
            <br />
            <br />
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
              <a className="nav-link" href="/vehicle-dash">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span>
              </a>
            </li>
            <br />
            <div className="sidebar-heading">Vehicle Management</div>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/add-new-vehicle">
                  <button className="dropbtn">
                    <i className="fa fa-plus-circle" /> New Vehicle
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/add_new_service">
                  <button className="dropbtn">
                    <i className="fa fa-plus-circle" /> Vehicle Services
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get-all-vehicle">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Vehicles List
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get_all_service">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Services List
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get_all_service_report">
                  <button className="dropbtn">
                    <i className="fa fa-bars" />Vehicle Services Report
                  </button>
                </Link>
              </div>
            </li>
            <br />
          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav className="navbar navbar-expand topbar mb-4 static-top">
                <h1 className="h3 mb-2 text-gray-800">
                Vehicle Service Record Add
                </h1>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        className="img-profile rounded-circle"
                        src={User}
                        alt=""
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <div className="dropdown-divider" />
                      <a
                        className="dropdown-item"
                        href="/"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        {" "}
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div
                className="container-fluid"
                style={{
                  backgroundImage: 'url("../../../assets/images/Fm3.jpg")',
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                }}
              >
                <div className="d-sm-flex align-items-center justify-content-between mb-4"></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                      <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                          <div className="row">
                            <div
                              className="col-lg-6 d-none d-lg-block"
                              style={{
                                backgroundImage:
                                  'url("../../../assets/images/Img2.jpg")',
                              }}
                            />
                            <div className="col-lg-6">
                              <div className="p-5">
                                <div className="text-center">
                                  <h1
                                    className="h4 text-gray-900 mb-4">
                                    New Vehicle Services Details
                                  </h1>
                                </div>
                                <form
                                  className="user"
                                  onSubmit={this.onSubmit}
                                  method="post"
                                >
                                  <div className="form-group">
                                    <label> Service ID </label>
                                    <input
                                      type="text"
                                      required="required"
                                      name="service_id"
                                      value={this.state.service_id}
                                      onChange={this.onChange}
                                      placeholder="SID-0000"
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Vehicle Number</label>
                                    <input
                                      type="text"
                                      required="required"
                                      name="vehicle_number"
                                      value={this.state.vehicle_number}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Vehicle Name</label>
                                    <input
                                      type="text"
                                      required="required"
                                      pattern="^[A-Za-zÀ-ÿ ,.'-]+$"
                                      name="vehicle_name"
                                      value={this.state.vehicle_name}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Vehicle Serviced Date</label>
                                    <input
                                      type="date"
                                      required="required"
                                      name="serviced_date"
                                      value={this.state.serviced_date}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Service Discription</label>
                                    <input
                                      type="text"
                                      required="required"
                                      name="discription"
                                      value={this.state.discription}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Service Cost (Rs.)</label>
                                    <input
                                      type="number"
                                      name="cost"
                                      required="required"
                                      pattern="[0-9]*"
                                      value={this.state.cost}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Next Service Date</label>
                                    <input
                                      type="date"
                                      required="required"
                                      name="next_date"
                                      value={this.state.next_date}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-user btn-block"
                                    style={{ fontSize: 15, height: 40 }}
                                  >
                                    Add Service
                                  </button>
                                </form>
                                <hr />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto text-black ">
                  <span>Copyright © PLANTSHED </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#home">
          <i className="fas fa-angle-up" />
        </a>
        <a href="#home" className="move-top text-center">
          <span className="fa fa-level-up" aria-hidden="true" />
        </a>
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="/">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}
export default AddService;
