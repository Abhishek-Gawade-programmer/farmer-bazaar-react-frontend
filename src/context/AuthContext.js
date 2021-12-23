import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  let [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  let sendOtp = (phoneNumber) => {
    console.log("taing the phouie number ads", phoneNumber);
    axios
      .post("http://localhost:8000/api/users/send-otp-user/", {
        phone_number: phoneNumber,
      })
      .then(function (response) {
        if (response.status === 200) {
          history.push("/verification-user");
          localStorage.setItem("tobeverifyphone",JSON.stringify(phoneNumber));
        }
      })
      .catch(function (error) {
        setError(error.response.data?.detail);
      });
  };

  let verifyOTP = async (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("tobeverifyphone"),e.target.otptext.value)
    axios
      .post("http://localhost:8000/api/users/validate-otp-user/", {
        phone_number: JSON.parse(localStorage.getItem("tobeverifyphone")),
        otp_text: e.target.otptext.value,
      })
      .then(function (response) {
        if (response.status === 200) {
          localStorage.removeItem("tobeverifyphone",);
          history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error.response)
        setError('invalid Otp try again');
      });
  };

  let loginUser = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/token/", {
        username: e.target.phone.value,
        password: e.target.password.value,
      })
      .then(function (response) {
        if (response.status === 200) {
          setAuthTokens(response.data);
          setUser(jwt_decode(response.data.access));
          localStorage.setItem("authTokens", JSON.stringify(response.data));
          history.push("/");
        }
      })
      .catch(function (error) {
        setError(error.response.data.detail);
      });
  };

  let regsiterUser = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/users/register/", {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        password: e.target.password.value,
        username: e.target.username.value,
      })
      .then(function (response) {
        if (response.status === 201) {
          console.log("create new accou t and sendind otp to user");
          sendOtp(e.target.username.value);
        }
      })
      .catch(function (error) {
        console.log("erroer");
        console.log(error);
        console.log(error.response);
        // setError(error.response.data.detail);
      });
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    history.push("/login");
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    setAuthTokens: setAuthTokens,
    setUser: setUser,
    loginUser: loginUser,
    error: error,
    logoutUser: logoutUser,
    regsiterUser: regsiterUser,
    verifyOTP: verifyOTP,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
