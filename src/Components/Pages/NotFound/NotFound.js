import React from "react";
import img from "../../../img/baner/404.gif";

const NotFound = () => {
  return (
    <div style={{ height: "88vh" }}>
      <div className=" d-flex h-100">
        <img className="w-100" src={img} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
