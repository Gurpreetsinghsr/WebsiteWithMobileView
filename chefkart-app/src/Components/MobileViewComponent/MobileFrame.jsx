import React, { Component } from "react";
class MobileFrame extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="smartphone col-3">
          <div className="content">
            <iframe
              title="mobileFrame"
              src="/main"
              style={{ width: "100%", border: "none", height: "100%" }}
            ></iframe>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MobileFrame;
