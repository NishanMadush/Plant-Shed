import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Sub from "../../assets/images/sub.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <header id="home"></header>

        <div className="main-top py-1">
          <div className="container">
            <div className="nav-content">
              <h1>
                <a id="logo" className="logo" href="/">
                  <img
                    src={Logo}
                    alt=""
                    style={{ marginLeft: -100  }}
                  />
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

        <div className="baneer-w3ls">
          <div className="row no-gutters">
            <div className="col-xl-5 col-lg-6">
              <div className="banner-left-w3">
                <div className="container">
                  <div className="banner-info_agile_w3ls">
                    <h5>Discover all our specials</h5>
                    <h3 className="text-da mb-4">
                      PLANT SHED <span>Green World</span>
                    </h3>
                    <p>
                      Welcome To The PLANT SHED...!
                    </p>
                    <a href="/" className="button-w3ls active mt-5">
                      Read More
                      <span
                        className="fa fa-caret-right ml-1"
                        aria-hidden="true"
                      />
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 callbacks_container">
              <div className="csslider infinity" id="slider1">
                <input
                  type="radio"
                  name="slides"
                  defaultChecked="checked"
                  id="slides_1"
                />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />
                <ul className="banner_slide_bg">
                  <li>
                    <div className="banner-top1" />
                  </li>
                  <li>
                    <div className="banner-top2" />
                  </li>
                  <li>
                    <div className="banner-top3" />
                  </li>
                </ul>
                <div className="arrows">
                  <label htmlFor="slides_1" />
                  <label htmlFor="slides_2" />
                  <label htmlFor="slides_3" />
                </div>
                <div className="navigation">
                  <div>
                    <label htmlFor="slides_1" />
                    <label htmlFor="slides_2" />
                    <label htmlFor="slides_3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix" />

        <div className="about-bottom">
          <div className="row no-gutters">
            <div className="col-lg-5 col-md-6 about"></div>
            <div className="col-lg-7 col-md-6 about-right-w3 text-right py-md-5">
              <div className="right-space py-xl-5 py-lg-3">
                <div className="title-section mb-4">
                  <p className="w3ls-title-sub">About Us</p>
                  <h3 className="w3ls-title">
                    Welcome to <span>PLANT SHED</span>
                  </h3>
                </div>
                <p className="about-text">
                  Plant Shed is an Agricultural farm which is manufacturing and selling healthy
                  and tasty food products Since 1990. We are proud to be partnering with the 
                  University of Western Australia’s Centre for Social Impact (UWA SCI), RegenWA,
                  Sustain: the Australian Food Network and the Regional Regeneration Alliance.<br>
                  </br>To date, the 4 Returns framework has positively impacted approximately 
                  10,000 people either directly or indirectly. The 4 Returns framework has 
                  triggered innovative ecologically-based farming practices enabled by sustainable
                  water management systems. It has also led to measures to restore the soils and 
                  biodiversity and introduced a scale-up approach that helps attract equity from 
                  retail and institutional investors.
                </p>
                <a href="/" className="button-w3ls mt-5">
                  Read More
                  <span className="fa fa-caret-right ml-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        

        <section className="offer pt-lg-3">
        <div className="row no-gutters">
            <div className="col-md-6 p-0">
              <div className="blog-sec-w3">
                <div className="text-blog-w3 text-center p-2">
                  <h4 className="text-wh mb-3">
                    <a href="menu.html">Fresh Milk</a>
                  </h4>
                  <p className="text-li">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris Sed ut perspiciatis unde omnis iste natus error.
                  </p>
                  <a href="/login" className="button-w3ls active mt-5">
                    Order Now
                    <span
                      className="fa fa-caret-right ml-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="blog-sec-w3 blog-sec-w3-2">
                <div className="text-blog-w3 text-center p-2">
                  <h4 className="text-wh mb-3">
                    <a href="menu.html">Organic Fruits &amp; Fresh Vegetables</a>
                  </h4>
                  <p className="text-li">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris Sed ut perspiciatis unde omnis iste natus error.
                  </p>
                  <a href="/login" className="button-w3ls active mt-5">
                    Order Now
                    <span
                      className="fa fa-caret-right ml-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />

        

        <section className="subscribe-main py-5">
        <div className="container py-xl-5 py-3">
            <div className="row pb-lg-4 pt-lg-5">
              <div className="col-lg-6 col-md-9 text-center">
                <h3 className="w3ls-title mb-2">Subscribe to Notification</h3>
                <p className="mb-xl-5 mb-4">
                  Free Delivery on your first order!
                </p>
                <form
                  action="#"
                  method="post"
                  className="d-flex newsletter-info"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email..."
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="col-lg-6 col-md-3"></div>
            </div>
            <img src={Sub} alt="" className="img-fluid sub-img" />
          </div>
        </section>

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

export default Home;
