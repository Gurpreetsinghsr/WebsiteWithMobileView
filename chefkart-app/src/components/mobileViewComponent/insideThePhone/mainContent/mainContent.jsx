import React, { Component } from "react";
import chef2 from "../../../../static/img/chef2.png";
class MainContent extends Component {
  state = {
    PartnerJoiningDay: "24",
    PartnerJoiningMonth: "May",
    TotalEarnings: 5000,
    TotalLeads: 100,
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="col-10 maincontent">
            <b>
              Hello <span className="orangeColorText">Partners</span>
            </b>
            <p className="smallTextInMainContent">
              Partner Science {this.state.PartnerJoiningMonth} ,
              {this.state.PartnerJoiningDay}
            </p>
            <img
              alt=""
              src={chef2}
              className="imageInsideMainContainer col-6"
            ></img>
            <div className="row">
              <div className="col-12">
                <span className="TotalEarningText col-12">Total Earnings</span>
                <div className="col-12">
                  <h4>
                    <b>Rs {this.state.TotalEarnings}</b>
                  </h4>
                </div>
              </div>
              <div className="col-12">
                <span className="TotalEarningText col-12">Total Leads</span>
                <div className="col-12">
                  <h4>
                    <b>{this.state.TotalLeads}</b>
                  </h4>
                </div>
              </div>
            </div>
            <br></br>
            <button className="btn btn-warning any">
              <span className=" newLeadButton"> Got a new lead ?</span>
              <span className="newleadArrow">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainContent;
