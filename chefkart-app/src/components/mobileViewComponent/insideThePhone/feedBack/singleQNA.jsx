import React from "react";

const SingleQNA = (props) => {
  return (
    <div className="row">
      <div className="ques">
        <b>Q.{props.Ques}</b>
      </div>
      <div className="ans">
        <p>Ans:- {props.Ans}</p>
      </div>
    </div>
  );
};

export default SingleQNA;
