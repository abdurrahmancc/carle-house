import React from "react";
import logo from "../../../img/logo1.png";
import "./Header.css";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import auth from "../../Hooks/FIrebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to={"/home"}>
            <img src={logo} alt="" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  ">
              <NavLink
                to={"/home"}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary fw-bold mx-2 text-decoration-none pb-1 border-2 border-bottom border-primary"
                    : " text-black fw-bold mx-2 text-decoration-none"
                }
              >
                HOME
              </NavLink>
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary fw-bold mx-2 text-decoration-none pb-1 border-2 border-bottom border-primary"
                    : " text-black fw-bold mx-2 text-decoration-none"
                }
              >
                SERVICES
              </NavLink>
              {user ? (
                <span
                  onClick={() => signOut(auth)}
                  className="btn text-decoration-none text-black pt-0 border-top-0 fw-bold mx-2  pb-1 "
                >
                  Sign Out
                </span>
              ) : (
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary fw-bold mx-2 text-decoration-none pb-1 border-2 border-bottom border-primary"
                      : " text-black fw-bold mx-2 text-decoration-none"
                  }
                >
                  LOGIN
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
