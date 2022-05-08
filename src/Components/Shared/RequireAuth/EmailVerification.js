import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../Hooks/FIrebase/Firebase";

const EmailVerification = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  return (
    <div style={{ height: "100vh" }} className="container">
      <div className="d-flex h-100 align-items-center text-center justify-content-center">
        <div>
          <h3>Please Email Verification</h3>
          <p>{user?.email.slice(0, 10)}....@gmail.com</p>
          <button
            className="btn-color text-decoration-none border-0 text-white rounded-1 px-3 py-2"
            onClick={async () => {
              await sendEmailVerification();
              toast.success("Sent email", { id: "verify" });
            }}
          >
            Verify email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
