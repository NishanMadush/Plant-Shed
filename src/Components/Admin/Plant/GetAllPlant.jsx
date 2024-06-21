import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../../API/environment";
import User from "../../../assets/images/user.png";
import Logo from "../../../assets/images/logo.png";

class GetAllPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantList: [],
    };
  }

  async componentDidMount() {
    await axios.get(`${APIURL}/plant/get-all-plant`).then((response) => {
      this.setState({ plantList: response.data.PlantList });
      console.log("PlantList =>", this.state.plantList);
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
              href="/plant-dash"
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
              <a className="nav-link" href="/plant-dash">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span>
              </a>
            </li>
            <br />
            <div className="sidebar-heading">Plant Management</div>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/add-new-plant">
                  <button className="dropbtn">
                    <i className="fa fa-plus-circle" /> Add Plant Details
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get-all-plant">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Plant Details List
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get-all-plant-report">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Plant Details Report
                  </button>
                </Link>
              </div>
            </li>
            <br />
            
          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="navbar navbar-expand topbar mb-4 static-top">
                <h1 className="h3 mb-2 text-gray-800">All Plant Details List</h1>
                <ul className="navbar-nav ml-auto">
                  {/* Nav Item - User Information */}
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
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="container-fluid">
                <p className="mb-4">All Details available in here.</p>

                <br />
                <br />
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Plant  Details
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing={0}
                      >
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Plant Register No</th>
                            <th>Plant Name</th>
                            <th>Nursery Type</th>
                            <th> Date</th>
                            <th>Plant Priority</th>
                            <th>Nursery Size</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                          <th>Image</th>
                            <th>Plant Register No</th>
                            <th>Plant Name</th>
                            <th>Nursery Type</th>
                            <th> Date</th>
                            <th>Plant Priority</th>
                           
                            <th>Nursery Size</th>
                            <th>Actions</th>
                          </tr>
                        </tfoot>
                        {this.state.plantList.length > 0 &&
                          this.state.plantList.map((item, index) => (
                            <tbody key={index}>
                              <tr>
                              <td>
                                <img
                                  src={item.plant_url}
                                  alt=""
                                  style={{ width: 150, height: 150 }}
                                  
                                />
                              </td>
                                <td>{item.plant_reg_no}</td>
                                <td>{item.plant_name}</td>
                                <td>{item.nursery_type}</td>
                                <td>{item.date}</td>
                                <td>{item.plant_priority}</td>
                                
                                <td>{item.nursery_size}</td>
                                
                                <td>
                                  <Link
                                    to={`/get-plant-dtails-by-id/${item._id}`}
                                  >
                                    <button
                                      className="btnEdit"
                                      style={{ marginBottom: 10 }}
                                    >
                                      <i className="fas fa-edit" title="Edit" />
                                    </button>
                                  </Link>
                                  <br />
                                  <Link to={`/add_plant_service/${item._id}`}>
                                    <button className="btnEdit">
                                      <i className="fa fa-money" title="Edit" />
                                    </button>
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto text-black ">
                  <span>Copyright © PLANT SHED </span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
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
export default GetAllPlant;
