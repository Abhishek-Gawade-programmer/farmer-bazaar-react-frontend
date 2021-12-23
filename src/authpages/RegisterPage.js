import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import AuthContext from "../context/AuthContext";

export default function RegisterPage() {
  let { regsiterUser } = useContext(AuthContext)

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <hr />
          <MDBCol md="8">
          <h1 className="display-5">Register Account</h1>
            <form onSubmit={regsiterUser}>
              <div className="mb-3">
                <label htmlFor="firstnamelablel" className="form-label">
                  First Name
                </label>
                <input
                  required=""
                  type="text"
                  className="form-control"
                  name="first_name"
                  id="firstnamelablel"
                  placeholder="First Name"
                  aria-describedby="firstnameHelp"
                />
                <div id="firstnameHelp" className="form-text">
                  Enter Your First Name
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="lastnamelablel" className="form-label">
                  Last Name
                </label>
                <input
                  required=""
                  type="text"
                  className="form-control"
                  id="lastnamelablel"
                  name="last_name"
                  placeholder="Last Name"
                  aria-describedby="lastnameHelp"
                />
                <div id="lastnameHelp" className="form-text">
                  Enter Your Last Name
                </div>
              </div>

              <label htmlFor="phonenumberlabel" className="form-label">
                Enter Your Phone Number
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  🇮🇳️
                </span>
                <input
                  required=""
                  type="text"
                  maxLength="10"
                  className="form-control"
                  placeholder="Phone Number"
                  name="username"
                  aria-label="Username"
                  aria-describedby="phonehelp"
                  id="phonenumberlabel"
                />
              </div>
              <div id="phonehelp" className="form-text">
                Only for indias phone number make sure it is of 10 dights
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  required=""
                  type="text"
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  id="exampleInputPassword1"
                />
              </div>
              <hr />
              <div className="form-text">
                by resteing yyou agree ou tream and condiaions link is herer
              </div>
              <div className="text-center mt-4">
                <input type="submit" className="btn btn-lg btn-primary" value=' Resgiter Your Account' />
             
              </div>
            </form>
            <hr />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
