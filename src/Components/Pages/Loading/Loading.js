import React from "react";

const Loading = () => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-100 d-flex align-items-center justify-content-center"
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
