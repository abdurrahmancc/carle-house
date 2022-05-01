import React from "react";

const Loading = () => {
  return (
    <div
      style={{ minHeight: "80vh" }}
      className="w-100 d-flex align-items-center justify-content-center"
    >
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
