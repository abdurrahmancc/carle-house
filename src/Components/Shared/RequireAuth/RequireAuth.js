import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Hooks/FIrebase/Firebase";
import Loading from "../../Pages/Loading/Loading";
import EmailVerification from "./EmailVerification";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user?.providerData[0]?.providerId == "password" && !user?.emailVerified) {
    return <EmailVerification></EmailVerification>;
  }
  // console.log(user);

  return children;
};

export default RequireAuth;
