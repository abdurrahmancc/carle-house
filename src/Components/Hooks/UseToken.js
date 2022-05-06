import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log(user);
  useEffect(() => {
    (async () => {
      const email = user.email;

      if (email) {
        const { data } = await axios.post("https://floating-wildwood-16493.herokuapp.com/login", {
          email,
        });
        localStorage.setItem("accessToken", data.token);
        setToken(data.token);
      }
    })();
  }, [user]);
  return [token];
};

export default useToken;
