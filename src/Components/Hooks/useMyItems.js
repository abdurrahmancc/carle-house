import { async } from "@firebase/util";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import axiosPrivet from "./Api";
import auth from "./FIrebase/Firebase";

const useMyItems = (email) => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const url = `https://floating-wildwood-16493.herokuapp.com/myitem?email=${email}`;
        const result = await axiosPrivet.get(
          url /* , {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        } */
        );
        setItems(result.data);
      } catch (error) {
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          Navigate("/login");
        }
      }
    })();
  }, [email, items]);
  return [items];
};

export default useMyItems;
