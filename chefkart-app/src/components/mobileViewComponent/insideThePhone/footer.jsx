import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="row m-0">
          <button className=" btn col-3">
            <i className="fa fa-home" aria-hidden="true"></i>
          </button>
          <button className="btn col-3 m-0">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
          </button>
          <button className="btn col-3">
            <i className="fa fa-gift" aria-hidden="true"></i>
          </button>
          <button className="btn col-3">
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
