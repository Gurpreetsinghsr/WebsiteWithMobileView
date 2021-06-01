import React, { Component } from "react";
import FeedBack from "./feedBack/feedback";
import Footer from "./footer";
import MainContent from "./mainContent/mainContent";
import NavBar from "./navbar";
import SupportButton from "./supportButton";

class InsideThePhone extends Component {
  state = {
    ActiveComponent: "Home",
  };
  handleBackButton = () => {
    const ActiveComponent = "Home";
    this.setState({ ActiveComponent: ActiveComponent });
  };
  handleNavButton = () => {
    const ActiveComponent = "FeedBack";
    this.setState({ ActiveComponent: ActiveComponent });
  };
  handleRednering = () => {
    if (this.state.ActiveComponent === "FeedBack")
      return <FeedBack handleBackButton={this.handleBackButton} />;
    else if (this.state.ActiveComponent === "Home") {
      return (
        <React.Fragment>
          <NavBar handleNavButton={this.handleNavButton} />
          <MainContent />
          <span className="backGround"></span>
          <SupportButton />
          <Footer />
        </React.Fragment>
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="main-container">{this.handleRednering()}</div>
      </React.Fragment>
    );
  }
}

export default InsideThePhone;
