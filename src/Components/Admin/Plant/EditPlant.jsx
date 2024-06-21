import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "../../../assets/images/user.png";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Logo from "../../../assets/images/logo.png";

const initialState = {
  plant_reg_no:"",
  plant_name:"",
  nursery_type:"",
  date:"",
  plant_priority:"",
  nursery_size: "",
  image:null,
};

class EditPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState,
      plantDetails: [],
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
        `${APIURL}/plant/get-plant-details/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({ plantDetails: res.data.PlantDetails });
        console.log("plantDetails", this.state.plantDetails);

        this.setState({ plant_reg_no: this.state.plantDetails.plant_reg_no });
        this.setState({
          plant_name: this.state.plantDetails.plant_name,
        });
        this.setState({
          nursery_type: this.state.plantDetails.nursery_type,
        });
        this.setState({
          date: this.state.plantDetails.date,
        });
        this.setState({
          plant_priority: this.state.plantDetails.plant_priority,
        });
        this.setState({
          image: this.state.plantDetails.plant_url,
        });
        this.setState({
          nursery_size: this.state.plantDetails.nursery_size,
        });
       
        
      });
  }

  onSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    
    formData.append("image", this.state.image);
    formData.append("plant_reg_no", this.state.plant_reg_no);
    formData.append("plant_name", this.state.plant_name);
    formData.append("nursery_type", this.state.nursery_type);
    formData.append("date", this.state.date);
    formData.append("plant_priority", this.state.plant_priority);
    formData.append("nursery_size", this.state.nursery_size);
   
    axios
      .put(
        `${APIURL}/plant/update-plant-details/${this.props.match.params.id}`,
        formData
      )
      .then((res) => {
        console.log("res", res);

        if (res.data.code === 200) {
          toast.success(res.data.message);
          this.props.history.push("/get-all-plant");
        } else {
          toast.error(res.data.message);
        }
      });
  }

  onDelete(event) {
    event.preventDefault();

    axios
      .delete(
        `${APIURL}/plant/delete-plant-details/${this.props.match.params.id}`
      )
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          toast.success(res.data.message);
          this.props.history.push("/get-all-plant");
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

            
            <br/>
          </ul>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav className="navbar navbar-expand topbar mb-4 static-top">
                <h1 className="h3 mb-2 text-gray-800">
                  Plant Details Add
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
                                    className="h4 text-gray-900 mb-4"
                                    style={{ fontStyle: "italic" }}
                                  >
                                    Edit{" "}
                                    {this.state.plantDetails.plant_reg_no}'s
                                    Details
                                  </h1>
                                </div>
                                <form
                                  className="user"
                                  onSubmit={this.onSubmit}
                                  method="post"
                                >
                                  <div className="form-group">
                                    <label>Plant Register NO</label>
                                    <input
                                      type="text"
                                      name="plant_reg_no"
                                      value={this.state.plant_reg_no}
                                      onChange={this.onChange}
                                      placeholder="P-0000"
                                      className="form-control form-control-user"
                                      readOnly
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Plant Name</label>
                                    <input
                                      type="text"
                                      name="plant_name"
                                      value={this.state.plant_name}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label>Nursery Type</label>
                                    <input
                                      type="text"
                                      name="nursery_type"
                                      value={this.state.nursery_type}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Date</label>
                                    <input
                                      type="date"
                                      name="date"
                                      value={this.state.date}
                                      onChange={this.onChange}
                                      className="form-control form-control-user"
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>Plant Priority</label>
                                    <select
                                      className="form-control "
                                      style={{ borderRadius: 25, height: 50 }}
                                      name="plant_priority"
                                      value={this.state.plant_priority}
                                      onChange={this.onChange}
                                    >
                                      <option>Select Priority</option>
                                      <option value="01">01</option>
                                      <option value="02">02</option>
                                      <option value="03">03</option>
                                      <option value="04">04</option>
                                      <option value="05">05</option>
                                    </select>
                                  </div>

                                  
                                 

                                  <div className="form-group">
                                    <label>Nursery Size</label>
                                    <input
                                      type="text"
                                      name="nursery_size"
                                      value={this.state.nursery_size}
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
                                    Update  Details
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
                                  Delete  Details
                                </button>

                                <Link to="/get-all-plant">
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
export default EditPlant;
