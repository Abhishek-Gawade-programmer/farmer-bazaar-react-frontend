import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";


export default function LoginPage() {
  let { setAuthTokens } = useContext(AuthContext);
  let { setUser } = useContext(AuthContext);
  let { error } = useContext(AuthContext);
  let { loginUser } = useContext(AuthContext);

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <hr />
          <MDBCol md="6">
            <form onSubmit={loginUser}>
              {error ? (
                <div className="alert alert-warning fade show" role="alert">
                  {error}
                </div>
              ) : (
                ""
              )}
              <p className="h4 text-center mb-4">Login To Your Account</p>

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
                <Link to="/register" className="link">
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
