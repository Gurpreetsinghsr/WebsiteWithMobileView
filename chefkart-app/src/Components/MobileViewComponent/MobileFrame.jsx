import React, { Component } from "react";
class MobileFrame extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="smartphone col-3">
          <div class="content">
            <iframe
              src="http://localhost:3000/"
              style={{ width: "100%", border: "none", height: "100%" }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MobileFrame;
