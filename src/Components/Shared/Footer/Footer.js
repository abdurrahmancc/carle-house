import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div
      style={
        pathname.includes("registration")
          ? { display: "none" }
          : pathname.includes("login")
          ? { display: "none" }
          : { display: "block" }
      }
      className="py-3 footer-color text-white text-center"
    >
      CopyRight &copy; {new Date().getFullYear()} Abdur Rahman
    </div>
  );
};

export default Footer;
