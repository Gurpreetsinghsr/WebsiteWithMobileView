import React, { Component } from "react";
import ringing from "../../../static/img/ringing.png";
import bell from "../../../static/img/bell.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    Nortifications: [{ id: 1, msg: "this is a msg" }],
  };
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light ">
          <button
            onClick={this.props.handleNavButton}
            className=" btn navbar-toggler-icon"
          ></button>
          <Link to="#" className="navbar-brand">
            <b>
              <span id="navbarTitle"> Chefkart </span> <small>Partners</small>
            </b>
          </Link>
          <div className="nav-title">
            <img
              alt=""
              className="bell"
              src={this.state.Nortifications.length === 0 ? bell : ringing}
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
