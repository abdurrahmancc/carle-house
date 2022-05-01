import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Registration.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Hooks/FIrebase/Firebase";
import toast from "react-hot-toast";

const Registers = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showPass, setPass] = useState(false);
  const [showConfirmPass, setConfirmPass] = useState(false);
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, createUser, createLoading, createError] =
    useCreateUserWithEmailAndPassword(auth);
  const [info, setInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ emails: "", passwords: "", general: "" });

  const submitForm = (e) => {
    e.preventDefault();
    const inputName = e.target.name.value;
    const inputEmail = e.target.email.value;
    const inputPassword = e.target.password.value;
    const inputConfirmPassword = e.target.confirmPassword.value;

    //handle email
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)) {
      setInfo({ ...info, email: inputEmail });
      setErrors({ ...errors, emails: "" });
      // console.log(inputEmail);
    } else {
      setErrors({ ...errors, emails: "Invalid email......." });
      setInfo({ ...info, email: "" });
    }

    //handle Password
    if (/(?=.*?[#?!@$%^&*-])/.test(inputPassword)) {
      setInfo({ ...info, password: inputPassword });
      setErrors({ ...errors, passwords: "" });
    } else {
      setErrors({
        ...errors,
        passwords: "At least one special character......",
      });
      setInfo({ ...info, password: "" });
    }
  };

  console.log(info.email);
  console.log(errors.emails);
  console.log(info.password);
  console.log(errors.passwords);

  return (
    <div style={{ minHeight: "80vh" }} className="container">
      <div className="login-body py-5 my-5 mx-auto bg-white">
        <div className="w-75  mx-auto">
          <h3 className="text-center">Please Registration</h3>
          <Form onSubmit={submitForm} className=" py-3 ">
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control className="" type="text" name="name" placeholder="Full Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>
            {/* {email.emailError && <span>{email.emailError}</span>} */}

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="position-relative">
                <span className="show-btn position-absolute" onClick={() => setPass(!showPass)}>
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <Form.Control
                type={showPass ? "password" : "text"}
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            {/* <span>{password.PasswordError && "hello"}</span> */}
            <span>hello</span>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <div className="position-relative">
                <span
                  className="show-btn position-absolute"
                  onClick={() => setConfirmPass(!showConfirmPass)}
                >
                  {showConfirmPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <Form.Control
                type={showConfirmPass ? "password" : "text"}
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />
            </Form.Group>
            <Button disabled={!agree} className="px-4" variant="primary" type="submit">
              Registration
            </Button>
          </Form>
          <div>
            <p>
              Already have an account?
              <Link className="text-decoration-none ps-1" to={"/login"}>
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registers;
