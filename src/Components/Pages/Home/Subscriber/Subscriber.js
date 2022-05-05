import React from "react";
import "./Subscriber.css";
const Subscriber = () => {
  return (
    <div className="subscriber-img ">
      <div className=" d-flex align-items-center justify-content-center h-100">
        <div className="">
          <h6 className="fs-1 blue-color fw-bold text-center">NEWSLETTER</h6>
          <p className="text-center fs-5">Subscribe to our monthly newsletter</p>
          <form action="">
            <div className="d-flex">
              <input
                type="text"
                className="form-control py-3 px-2 text-center border-0 rounded-0 input-width"
                id="exampleInputEmail1"
                placeholder="Enter your email here"
              ></input>
              <button className="btn-color ms-3  border-0 text-white fw-bold px-5 py-3">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
