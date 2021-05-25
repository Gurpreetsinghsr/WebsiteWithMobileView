import React, { Component } from "react";
import ListOfQNA from "./listOfQNA";

class FeedBack extends Component {
  state = {
    QNAList: [
      {
        id: 1,
        Ques: "How are payments done?",
        Ans: "You can co to contact us page on our official website or click on the support button at the home page",
        QNAFor: "payments",
      },
      {
        id: 2,
        Ques: "What are the payments done?",
        Ans: "You can co to contact us page on our official website or click on the support button at the home page",
        QNAFor: "leads",
      },
      {
        id: 3,
        Ques: "Why are the payments done?",
        Ans: "You can co to contact us page on our official website or click on the support button at the home page",
        QNAFor: "payments",
      },
      {
        id: 4,
        Ques: "What is the refund policy?",
        Ans: "You can co to contact us page on our official website or click on the support button at the home page",
        QNAFor: "payments",
      },
      {
        id: 5,
        Ques: "In the leads page How are payments done?",
        Ans: "You can co to contact us page on our official website or click on the support button at the home page",
        QNAFor: "leads",
      },
      {
        id: 6,
        Ques: "In the leads page What are the payments done?",
        Ans: "You can co to contact us page on our official website or click on the support button at the home page",
        QNAFor: "leads",
      },
      {
        id: 7,
        Ques: "In the leads page Why are the payments done?",
        Ans: "You can co to contact us page on our official website or click on the support button at the home page",
        QNAFor: "leads",
      },
      {
        id: 9,
        Ques: "Rewards Why are the payments done?",
        Ans: "You can co to contact us page on our official website or click on the support button at the home page",
        QNAFor: "rewards",
      },
    ],
    newListOfQNAs: [],
    ActiveButton: "1",
  };
  handlePaymentsClick = () => {
    const ActiveButton = "1";
    const newListOfQNAs = this.state.QNAList.filter(
      (x) => x.QNAFor === "payments"
    );
    this.setState({ newListOfQNAs: newListOfQNAs });
    this.setState({ ActiveButton: ActiveButton });
  };
  handleLeadsClick = () => {
    const ActiveButton = "2";
    const newListOfQNAs = this.state.QNAList.filter(
      (x) => x.QNAFor === "leads"
    );
    this.setState({ newListOfQNAs: newListOfQNAs });
    this.setState({ ActiveButton: ActiveButton });
  };
  handleRewardsClick = () => {
    const ActiveButton = "3";
    const newListOfQNAs = this.state.QNAList.filter(
      (x) => x.QNAFor === "rewards"
    );
    this.setState({ newListOfQNAs: newListOfQNAs });
    this.setState({ ActiveButton: ActiveButton });
  };
  componentDidMount = () => {
    const newListOfQNAs = this.state.QNAList.filter(
      (x) => x.QNAFor === "payments"
    );
    this.setState({ newListOfQNAs: newListOfQNAs });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container main">
          <div className="row">
            <span className="FAQs">
              <span className="backArrow">
                <button onClick={this.props.handleBackButton} className="btn">
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                </button>
              </span>{" "}
              FAQs
            </span>
          </div>
          <br></br>
          <div className="row">
            <h6>
              <b>Top Questions</b>
            </h6>
          </div>
          <div className="row">
            <div className="col">
              <button
                onClick={this.handlePaymentsClick}
                type="button"
                className={
                  this.state.ActiveButton === "1"
                    ? "btn btn-outline-warning  active"
                    : "btn btn-outline-warning "
                }
              >
                Payments
              </button>
            </div>
            <div className="col">
              <button
                onClick={this.handleLeadsClick}
                type="button"
                className={
                  this.state.ActiveButton === "2"
                    ? "btn btn-outline-warning  active"
                    : "btn btn-outline-warning "
                }
              >
                Leads
              </button>
            </div>
            <div className="col">
              <button
                onClick={this.handleRewardsClick}
                type="button"
                className={
                  this.state.ActiveButton === "3"
                    ? "btn btn-outline-warning  active"
                    : "btn btn-outline-warning "
                }
              >
                Rewards
              </button>
            </div>
          </div>
          <div className="row">
            <ListOfQNA QNAList={this.state.newListOfQNAs}></ListOfQNA>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeedBack;
