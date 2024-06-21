import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "../../../assets/images/user.png";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Logo from "../../../assets/images/logo.png";

const initialState = {
        Nic:"",
        emp_name:"",
        emp_address:"",
        emp_department:"",
        emp_reg_date:"",
        gender_status:"",
        emp_salary:"",
        image:null,
};

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState,
      employeeDetails: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onFileChange = (event) => {

    this.setState({ image: event.target.files[0] });

  };
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async componentDidMount() {
    await axios
      .get(
        `${APIURL}/employee/get-employee-details/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({ employeeDetails: res.data.EmployeeDetails });
        console.log("employeeDetails", this.state.employeeDetails);

        this.setState({ Nic: this.state.employeeDetails.Nic});
        this.setState({
          emp_name: this.state.employeeDetails.emp_name,
        });
        this.setState({
          emp_address: this.state.employeeDetails.emp_address,
        });
        this.setState({
          emp_department: this.state.employeeDetails.emp_department,
        });
        
        this.setState({
          emp_reg_date: this.state.employeeDetails.emp_reg_date,
        });
        this.setState({
          gender_status: this.state.employeeDetails.gender_status,
        });
        this.setState({
          emp_salary: this.state.employeeDetails.emp_salary,
        });
        this.setState({
          image: this.state.employeeDetails.employee_url,
        });
        
        
      });
  }

  onSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    
    formData.append("image", this.state.image);
    formData.append("Nic", this.state.Nic);
    formData.append("emp_name", this.state.emp_name);
    formData.append("emp_address", this.state.emp_address);
    formData.append("emp_department", this.state.emp_department);
    formData.append("emp_reg_date", this.state.emp_reg_date);
    formData.append("gender_status", this.state.gender_status);
    formData.append("emp_salary", this.state.emp_salary);

    axios
      .put(
        `${APIURL}/employee/update-employee-details/${this.props.match.params.id}`,
        formData
      )
      .then((res) => {
        console.log("res", res);

        if (res.data.code === 200) {
          toast.success(res.data.message);
          this.props.history.push("/get-all-employee");
        } else {
          toast.error(res.data.message);
        }
      });
  }

  onDelete(event) {
    event.preventDefault();

    axios
      .delete(
        `${APIURL}/employee/delete-employee-details/${this.props.match.params.id}`
      )
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          toast.success(res.data.message);
          this.props.history.push("/get-all-employee");
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
              href="/employee-dash"
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
              <a className="nav-link" href="/employee-dash">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span>
              </a>
            </li>
            <br />
            <div className="sidebar-heading">Employee Management</div>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/add-new-employee">
                  <button className="dropbtn">
                    <i className="fa fa-plus-circle" /> New Employee
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/add-new-salary">
                  <button className="dropbtn">
                    <i className="fa fa-plus-circle" /> New Salary Record
                  </button>
                </Link>
              </div>
            </li>
            <br/>
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get-all-employee">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Employees List
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get_all_salary">
                  <button className="dropbtn">
                    <i className="fa fa-bars" /> Salary Record List
                  </button>
                </Link>
              </div>
            </li>
            <br />
            <li className="nav-item">
              <div className="dropdown">
                <Link to="/get_all_employee_report">
                  <button className="dropbtn">
                    <i className="fa fa-bars" />Employee Details Report
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
                  New Employee Profile Add
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
                                  'url("../../../assets/images/Img5.jpg")',
                              }}
                            />
                            <div className="col-lg-6">
                              <div className="p-5">
                                <div className="text-center">
                                  <h1
                                    className="h4 text-gray-900 mb-4"
                                    style={{ fontStyle: "italic" }}
                                  >
                                    Edit{" "}
                                    {this.state.employeeDetails.emp_name}'s
                                    Details
                                  </h1>
                                </div>
                                <form
                                  className="user"
                                  onSubmit={this.onSubmit}
                                  method="post"
                                >
                                  <div className="form-group">
                                    <label>Nic </label>
                                    <input
                                      type="text"
                                      name="Nic"
                                      value={this.state.Nic}
                                      onChange={this.onChange}
                                      placeholder="xxxxxxxxxxv"
                                      className="form-control form-control-user"
                                      
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Name </label>
                                    <input
                                      type="text"
                                      name="emp_name"
                                      value={this.state.emp_name}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Address</label>
                                    <input
                                      type="text"
                                      name="emp_address"
                                      value={this.state.emp_address}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Department </label>
                                    <input
                                      type="text"
                                      name="emp_department"
                                      value={this.state.emp_department}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Registration </label>
                                    <input
                                      type="text"
                                      name="emp_reg_date"
                                      value={this.state.emp_reg_date }
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Gender Type</label>
                                    <select
                                      className="form-control "
                                      style={{ borderRadius: 25, height: 50 }}
                                      name="gender_status"
                                      value={this.state.gender_status}
                                      onChange={this.onChange}
                                    >
                                      <option>Select Gender</option>
                                      <option value="male">Male</option>
                                      <option value="female">female</option>
                                    </select>
                                  </div>

                                  
                                  <div className="form-group">
                                    <label>Salary</label>
                                    <input
                                      type="text"
                                      name="emp_salary"
                                      value={this.state.emp_salary}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Images</label>
                                    <input
                                      type="file"
                                      name="image"
                                      accept="image/*"
                                      onChange={this.onFileChange}
                                      className=" images-upload"
                                      required
                                      />
                                  </div>


                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-user btn-block"
                                  >
                                    Update Employee Details
                                  </button>
                                </form>

                                <br />
                                <button
                                  type="submit"
                                  className="btn btn-danger btn-user btn-block"
                                  style={{
                                    borderRadius: 25,
                                    height: 40,
                                    marginTop: -15,
                                  }}
                                  onClick={this.onDelete}
                                >
                                  Delete Employee Details
                                </button>

                                <Link to="/get-all-employee">
                                  <button
                                    type="submit"
                                    className="btn btn-success btn-user btn-block"
                                    style={{
                                      borderRadius: 25,
                                      height: 40,
                                      marginTop: 10,
                                    }}
                                  >
                                    Cancel
                                  </button>
                                </Link>
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
                  <span>Copyright © PLANT SHED </span>
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
export default EditEmployee;
