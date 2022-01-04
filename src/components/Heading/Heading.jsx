import React from "react";
import "./Heading.css";
function Heading(props) {
  return (
    <>
      <div className="heading">
        <p className="heading-title">{props.title}</p>
      </div>
    </>
  );
}

export default Heading;
