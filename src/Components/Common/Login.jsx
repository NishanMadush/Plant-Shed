import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../API/environment";
import Logo from "../../assets/images/logo.png";

const initialState = {
  customer_email: "",
  customer_password: "",
};

class Login extends Component {
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
    localStorage.clear();
    event.preventDefault();
    let login = {
      customer_email: this.state.customer_email,
      customer_password: this.state.customer_password,
    };

    console.log("customer_email", login.customer_email);
    console.log("customer_password", login.customer_password);

    if (
      login.customer_email === "adminvehicle@gmail.com" &&
      login.customer_password === "1234"
    ) {
      this.props.history.push("/vehicle-dash");
      toast.success("Admin is logged.");
    }

    if (
      login.customer_email === "adminemployee@gmail.com" &&
      login.customer_password === "1234"
    ) {
      this.props.history.push("/employee-dash");
      toast.success("Admin is logged.");
    }

    if (
      login.customer_email === "adminplant@gmail.com" &&
      login.customer_password === "1234"
    ) {
      this.props.history.push("/plant-dash");
      toast.success("Admin is logged.");
    }


    
     else {
      axios.post(`${APIURL}/customer/login-customer`, login).then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("data are ", res.data.CustomerDetails);

          let i = JSON.stringify(res.data.token);
          let result = i.slice(1, -1);

          localStorage.setItem(
            "customer",
            JSON.stringify(res.data.CustomerDetails)
          );

          let id = JSON.stringify(res.data.CustomerDetails._id);
          let cId = id.slice(1, -1);

          localStorage.setItem("CID", cId);

          localStorage.setItem("token", result);
          console.log("token", result);
          this.props.history.push("/customer-home");
          toast.success(res.data.CustomerDetails.customer_name + " is logged.");
        } else {
          toast.error(res.data.message);
        }
      });
    }
  }

  render() {
    return (
      <div>
        <header id="home"></header>

        <div className="main-top py-1">
          <div className="container">
            <div className="nav-content">
              <h1>
                <a id="logo" className="logo" href="/">
                  <img src={Logo} alt="" style={{ marginLeft: -100 }} />
                  PLANT SHED
                </a>
              </h1>

              <div className="nav_web-dealingsls">
                <nav>
                  <label htmlFor="drop" className="toggle">
                    Menu
                  </label>
                  <input type="checkbox" id="drop" />
                  <ul className="menu">
                    <li>
                      <a href="/" className="active-page">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <label htmlFor="drop-3" className="toggle toogle-2">
                        Pages
                        <span className="fa fa-angle-down" aria-hidden="true" />
                      </label>
                      <a href="#pages">
                        Services
                        <span className="fa fa-angle-down" aria-hidden="true" />
                      </a>
                      <input type="checkbox" id="drop-3" />
                      <ul>
                        <li>
                          <a className="drop-text" href="/employee-dash">
                            Employee Management
                          </a>
                        </li>
                        <li>
                          <a className="drop-text" href="/vehicle-dash">
                            Vehicle Management
                          </a>
                        </li>
                        <li>
                          <a className="drop-text" href="#blog">
                            Plant & Nursery
                          </a>
                        </li>

                        <li>
                          <a className="drop-text" href="#blog">
                            Store
                          </a>
                        </li>

                        <li>
                          <a className="drop-text" href="/login">
                            Login
                          </a>
                        </li>
                        <li>
                          <a className="drop-text" href="/register">
                            Register
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="/login">Login</a>
                    </li>

                    <li>
                      <a href="/register">Register</a>
                    </li>
                    <li>
                      <Link
                        to="https://w3layouts.com/"
                        target="_blank"
                        className="dwn-button ml-lg-5"
                      ></Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="main-banner-2"></div>

        <div className="breadcrumb-agile bg-light py-2">
          <ol className="breadcrumb bg-light m-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Login
            </li>
          </ol>
        </div>

        <div className="login-contect py-5">
          <div className="container py-xl-5 py-3">
            <div className="login-body">
              <div className="login p-4 mx-auto">
                <h5 className="text-center mb-4">Login Now</h5>
                <form onSubmit={this.onSubmit} method="post">
                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="customer_email"
                      value={this.state.customer_email}
                      onChange={this.onChange}
                      placeholder
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-2">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="customer_password"
                      value={this.state.customer_password}
                      onChange={this.onChange}
                      placeholder
                    />
                  </div>
                  <button type="submit" className="btn submit mb-4">
                    Login
                  </button>
                  <p className="forgot-w3ls text-center mb-3">
                    <a href="/" className="text-da">
                      Forgot your password?
                    </a>
                  </p>
                  <p className="account-w3ls text-center text-da">
                    Don't have an account?
                    <a href="/register">Create one now</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer className="py-5">
        <div className="container py-xl-4">
            <div className="row footer-top">
              <div className="col-lg-4 footer-grid_section_1its footer-text">
                {/* logo */}
                <h2>
                  <a className="logo text-wh" href="index.html">
                    <img src={Logo} alt="" className="img-fluid" />
                    <br />
                    <span></span> PLANT SHED
                  </a>
                </h2>
              </div>
              <div className="col-lg-4 footer-grid_section_1its my-lg-0 my-sm-4 my-4">
                <div className="footer-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="footer-text mt-4">
                  <p>Address : Nuwara Eliya Main Rd, Bandarawela</p>
                  <p className="my-2">Phone : +94- 70 799 2225</p>
                  <p>
                    Email :{" "}
                    <a href="mailto:info@example.com">
                      plantshed@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 footer-grid_section_1its">
                <div className="footer-title">
                  <h3>Request Info</h3>
                </div>
                <div className="info-form-right mt-4 p-0">
                  <form action="/" method="post">
                    <div className="row">
                      <div className="col-lg-6 form-group mb-2 pr-lg-1">
                        <input
                          type="text"
                          className="form-control"
                          name="Name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 form-group mb-2 pl-lg-1">
                        <input
                          type="text"
                          className="form-control"
                          name="Phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="email"
                        className="form-control"
                        name="Email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group mb-2">
                      <textarea
                        name="Comment"
                        className="form-control"
                        placeholder="Comment"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn submit-contact ml-auto"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="cpy-right text-center py-3">
          <p>© 2022 PLANT SHED-. All rights reserved</p>
        </div>
        <a href="#home" className="move-top text-center">
          <span className="fa fa-level-up" aria-hidden="true" />
        </a>
      </div>
    );
  }
}
export default Login;
