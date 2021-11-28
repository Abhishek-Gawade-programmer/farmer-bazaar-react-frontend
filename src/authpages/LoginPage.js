import React, { useContext, useState } from "react";

import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBAlert,
} from "mdb-react-ui-kit";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  let { setAuthTokens } = useContext(AuthContext);
  let { setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const history = useHistory();
  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8000/api/users/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.phone.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      history.push("/");
    } else if (response.status === 401) {
      // getting th error of 401
      // console.
      setError(await data.detail);
    }
  };

  return (
    <>
      x
      <MDBContainer>
        <MDBRow>
          <hr />
          <MDBCol md="6">
            <form onSubmit={loginUser}>
              {error ? (
                <MDBAlert color="warning" dismiss>
                  error
                </MDBAlert>
              ) : (
                ""
              )}
              <p className="h4 text-center mb-4">Sign in</p>

              <label htmlFor="defaultFormUserUsernameEx" className="grey-text">
                Phone Number
              </label>
              <input
                type="number"
                id="defaultFormUserUsernameEx"
                name="phone"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                name="password"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Login
                </MDBBtn>
              </div>
            </form>
            <hr />
            <MDBRow>
              <MDBCol md="6">
                <Link to="/topics" className="link">
                  Forgot Password
                </Link>
              </MDBCol>
              <MDBCol md="6">
                <Link to="/topics" className="link">
                  Create Acccout
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
