import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="py-3  footer-bg text-white text-center">
      CopyRight &copy; {new Date().getFullYear()} Abdur Rahman
    </div>
  );
};

export default Footer;
