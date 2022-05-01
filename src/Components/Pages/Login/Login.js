import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import google from "../../../img/Social/google-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
// import { updatePassword } from "firebase/auth";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [showPass, setPass] = useState(false);
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, signUser, signLoading, signError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const emailRef = useRef("");

  let navigate = useNavigate();
  let location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (loading || signLoading || GoogleLoading) {
    return <Loading></Loading>;
  }

  //handle submit form
  const handleForm = (e) => {
    e.preventDefault();
    const inputEmail = e.target.email.value;
    const inputPassword = e.target.password.value;
    setEmail(inputEmail);
    setPassowrd(inputPassword);
    loginUser();
  };

  // login user
  const loginUser = () => {
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleResetPassword = async () => {
    const inputEmail = emailRef.current.value;
    await sendPasswordResetEmail(inputEmail);
  };

  return (
    <div style={{ minHeight: "80vh" }} className="container">
      <div className="login-body py-5 my-5 mx-auto bg-white">
        <div className="w-75  mx-auto">
          <h3 className="text-center">Please Login</h3>
          <Form onSubmit={handleForm} className=" py-3 ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={emailRef} name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>

              <div className="position-relative">
                <span className="show-btn position-absolute" onClick={() => setPass(!showPass)}>
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <Form.Control
                name="password"
                type={showPass ? "password" : "text"}
                placeholder="Password"
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <span onClick={() => handleResetPassword()} className="btn text-primary ">
                Forget Password
              </span>
            </div>

            <Button className="px-4" variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <div>
            <p>
              Don't have an account?
              <Link className="text-decoration-none ps-1" to={"/registration"}>
                Please SignUp
              </Link>
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <hr />
            <span className="px-2">or</span>
            <hr />
          </div>
          <div>
            <button
              onClick={() => signInWithGoogle()}
              className="py-2 btn border border-dark rounded-pill  mt-3 w-100"
            >
              {" "}
              <img src={google} alt="" /> continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
