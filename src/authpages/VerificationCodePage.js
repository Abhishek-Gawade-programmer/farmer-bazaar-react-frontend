import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import AuthContext from "../context/AuthContext";

export default function VerificationCodePage() {
  let { verifyOTP } = useContext(AuthContext);
  let { error } = useContext(AuthContext);

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <hr />
          <MDBCol md="6" className="text-center mt-5">
            <h1 className="display-5">Verification User Account</h1>
            <hr/>
            <form onSubmit={verifyOTP}>
                  {error ? (
                <div className="alert alert-warning fade show" role="alert">
                  {error}
                </div>
              ) : (
                ""
              )}
              <div className="mb-3">
                <label htmlFor="codelablel" className="form-label">
                  Enter The code
                </label>
                <div className="input-group input-group-lg">
                  <input
                  required
                    type="number"
                    id='codelablel'
                    className="form-control"
                    aria-label="Sizing example input"
                    name='otptext'
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
                <div id="codeHelp" className="form-text">
                  Enter six digits code that is send to your mobile via sms
                </div>
              </div>
              <hr />
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-lg btn-primary">
                  Login To Your Account
                </button>
              </div>
            </form>
            <hr />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
