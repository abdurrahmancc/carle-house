import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Registration.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Hooks/FIrebase/Firebase";
import toast from "react-hot-toast";
import { sendEmailVerification } from "firebase/auth";
import Loading from "../Loading/Loading";
import { async } from "@firebase/util";
import logo from "../../../img/logo-3.png";
import useToken from "../../Hooks/UseToken";

const Registration = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showPass, setPass] = useState(false);
  const [showConfirmPass, setConfirmPass] = useState(false);
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, createUser, createLoading, createError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [email, setEmail] = useState({ value: "", errors: "" });
  const [password, setPassword] = useState({ value: "", errors: "" });
  const [confirmPassword, setConfirmPassword] = useState({ value: "", errors: "" });
  const [generalError, setGeneralError] = useState("");
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [displayName, setDisplayName] = useState("");
  const [token] = useToken(user);
  let navigate = useNavigate();
  let location = useLocation();

  console.log(displayName);
  //handle OnBlur Email
  const handleOnBlurEmail = (inputEmail) => {
    console.log(inputEmail);
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)) {
      setEmail({ value: inputEmail, errors: "" });
    } else {
      setEmail({ value: "", errors: "Invalid email!" });
    }
  };

  // handle OnBlur Password
  const handleOnBlurPassword = (inputPassword) => {
    console.log(inputPassword);
    if (/(?=.*?[#?!@$%^&*-])/.test(inputPassword)) {
      setPassword({ value: inputPassword, errors: "" });
    } else {
      setPassword({
        value: "",
        errors: "At least one special character",
      });
    }
  };

  // handle OnBlur confirm Password
  const handleOnBlurConfirmPassowrd = (inputConfirmPassword) => {
    console.log(inputConfirmPassword);
    if (/(?=.*?[#?!@$%^&*-])/.test(inputConfirmPassword)) {
      setConfirmPassword({ value: inputConfirmPassword, errors: "" });
    } else {
      setConfirmPassword({
        value: "",
        errors: "At least one special character",
      });
    }
  };

  // handle submit Form
  const submitForm = async (e) => {
    e.preventDefault();
    /*     const inputName = e.target.name.value;
    const inputEmail = e.target.email.value;
    const inputPassword = e.target.password.value;
    const inputConfirmPassword = e.target.confirmPassword.value;

    setDisplayName(inputName);

    //handle email
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)) {
      setEmail({ value: inputEmail, errors: "" });
    } else {
      setEmail({ value: "", errors: "Invalid email!" });
    }

    //handle Password
    if (/(?=.*?[#?!@$%^&*-])/.test(inputPassword)) {
      setPassword({ value: inputPassword, errors: "" });
    } else {
      setPassword({
        value: "",
        errors: "At least one special character",
      });
    }

    //handle confirm Password
    if (/(?=.*?[#?!@$%^&*-])/.test(inputConfirmPassword)) {
      setConfirmPassword({ value: inputConfirmPassword, errors: "" });
    } else {
      setConfirmPassword({
        value: "",
        errors: "At least one special character",
      });
    } */

    //handle match password
    if (password.value !== confirmPassword.value) {
      setGeneralError("not match your password!");
      return;
    }

    // createUserEmail();
    if (email.value && password.value) {
      await createUserWithEmailAndPassword(email.value, password.value);
      await updateProfile({ displayName: displayName });
      toast.success("success", { id: "register-success" });
    }
  };

  const createUserEmail = async () => {
    /*     if (email.value && password.value) {
      createUserWithEmailAndPassword(email.value, password.value);
      await updateProfile({ displayName: displayName });
      toast.success("success", { id: "register-success" });
    } */
  };

  if (loading || createLoading) {
    return <Loading></Loading>;
  }

  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  console.log(email.value);
  console.log(email.errors);
  console.log(password.value);
  console.log(password.errors);
  console.log(generalError);
  console.log(displayName);
  console.log(user);

  return (
    <div style={{ minHeight: "100vh" }} className=" pt-4 register-bg ">
      <div className="text-center ">
        <Link to={"/"} className=" ">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="pb-5">
        <div className="login-body py-3 mt-3 mx-auto bg-white">
          <div className="w-75  mx-auto">
            <h3 className="text-center loginColor">Please Registration</h3>
            <Form onSubmit={submitForm} className=" pb-3 ">
              <Form.Group className="mb-2">
                <Form.Label className="mb-0">Full Name</Form.Label>
                <Form.Control
                  onBlur={(e) => setDisplayName(e.target.value)}
                  type="text"
                  name="name"
                  className="inputFieldBorder"
                  placeholder="Full Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className="mb-0">Email address</Form.Label>
                <Form.Control
                  onBlur={(e) => handleOnBlurEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="inputFieldBorder"
                  placeholder="Enter email"
                  required
                />
                <span className="text-danger">{email.errors && email.errors}</span>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label className="mb-0">Password</Form.Label>
                <div className="position-relative">
                  <span
                    className="show-btn position-absolute loginColor"
                    onClick={() => setPass(!showPass)}
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <Form.Control
                  onBlur={(e) => handleOnBlurPassword(e.target.value)}
                  type={showPass ? "text" : "password"}
                  name="password"
                  className="inputFieldBorder"
                  placeholder="Password"
                  required
                />
                <span className="text-danger">{password.errors && password.errors}</span>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label className="mb-0">Confirm Password</Form.Label>
                <div className="position-relative">
                  <span
                    className="show-btn position-absolute loginColor"
                    onClick={() => setConfirmPass(!showConfirmPass)}
                  >
                    {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <Form.Control
                  onBlur={(e) => handleOnBlurConfirmPassowrd(e.target.value)}
                  type={showConfirmPass ? "text" : "password"}
                  name="confirmPassword"
                  className="inputFieldBorder"
                  placeholder="Confirm Password"
                  required
                />
                <span className="text-danger">
                  {confirmPassword?.errors ? confirmPassword.errors : generalError && generalError}
                </span>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <Form.Check
                  onClick={() => setAgree(!agree)}
                  type="checkbox"
                  className="loginColor"
                  label="Accept Terms & Condition"
                />
              </Form.Group>
              <button
                disabled={!agree}
                className=" w-100 border-0 text-white mb-2 mt-2 px-5 submitBtn"
                variant="primary"
                type="submit"
              >
                Registration
              </button>
            </Form>
          </div>
          <div>
            <hr className="w-100" />
            <p className="text-center signUp-fontSize">
              Already have an account?
              <Link className=" loginColor ps-1" to={"/login"}>
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
