import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../Hooks/FIrebase/Firebase";

const EmailVerification = () => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  return (
    <div style={{ height: "90vh" }} className="container">
      <div className="d-flex h-100 align-items-center text-center justify-content-center">
        <div>
          <h3>Please Email Verification</h3>
          <button
            className="btn btn-primary"
            onClick={async () => {
              await sendEmailVerification();
              toast("Sent email", { id: "verify" });
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
