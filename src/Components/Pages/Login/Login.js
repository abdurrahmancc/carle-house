import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import google from "../../../img/Social/google-logo.png";
import logo from "../../../img/logo-3.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUserAlt, FaLock, FaLessThan } from "react-icons/fa";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import auth from "../../Hooks/FIrebase/Firebase";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";
import axios from "axios";
// import { updatePassword } from "firebase/auth";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showPass, setPass] = useState(false);
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, signUser, signLoading, signError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const [errors, setErrors] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  let navigate = useNavigate();
  let location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (loading || signLoading || GoogleLoading) {
    return <Loading></Loading>;
  }

  //handle submit form
  const handleForm = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.token);
    navigate(from, { replace: true });
    console.log(data.token);
  };

  if (user) {
    // navigate(from, { replace: true });
  }

  const handleResetPassword = async () => {
    const inputEmail = emailRef.current.value;
    await sendPasswordResetEmail(inputEmail);
  };

  return (
    <div style={{ minHeight: "100vh" }} className="loginPage pb-5 ">
      <div className="container">
        <div className="text-center py-5 ">
          <Link to={"/"} className=" ">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="login-body pt-5 mx-auto bg-white">
          <div className="  ">
            <h3 className="text-center loginColor">Log in to your account</h3>
            <Form onSubmit={handleForm} className=" py-3 w-75 mx-auto">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>

                <FaUserAlt className="loginColor userIcon"></FaUserAlt>

                <Form.Control
                  ref={emailRef}
                  className="inputFieldBorder ps-5 py-2"
                  name="email"
                  type="email"
                  placeholder=" Email address"
                />
                {signError?.message.includes("auth/user-not-found") && (
                  <span className="text-danger">! Enter a valid email address</span>
                )}
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <FaLock className="loginColor faLock"></FaLock>
                <div className="position-relative">
                  <span className="show-btn position-absolute" onClick={() => setPass(!showPass)}>
                    {showPass ? (
                      <FaEye className="loginColor" />
                    ) : (
                      <FaEyeSlash className="loginColor" />
                    )}
                  </span>
                </div>

                <Form.Control
                  ref={passwordRef}
                  name="password"
                  className="inputFieldBorder ps-5 py-2"
                  type={showPass ? "password" : "text"}
                  placeholder="Password"
                  required
                />
                {signError?.message.includes("auth/wrong-password") && (
                  <span className="text-danger">! wrong-password</span>
                )}
              </Form.Group>

              <button
                className=" w-100 border-0 text-white mb-2 mt-2 px-5 submitBtn"
                variant="primary"
                type="submit"
              >
                Log In
              </button>
            </Form>

            <hr className="w-100" />

            <div className="pb-2">
              <p className="text-center signUp-fontSize">
                New to Carle House?
                <Link className="loginColor ps-1" to={"/registration"}>
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-75 mx-auto forgetPassword">
          <div className="d-flex justify-content-around mt-2">
            <span onClick={() => signInWithGoogle()} className=" btn btn-link  text-white ">
              Login with google
            </span>
            <span onClick={() => handleResetPassword()} className="btn btn-link text-white ">
              Forgot your Password?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
