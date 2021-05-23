import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid mx-2">
        <nav class="navbar navbar-light ">
          <a>
            <span class="navbar-toggler-icon"></span>
            <a className="navbar-brand mx-2">
              <b>
                Chefkart <small>Partners</small>
              </b>
            </a>
            <div className="nav-title">
              <i class="far fa-bell"></i>
            </div>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
