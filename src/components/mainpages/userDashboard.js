import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import AuthContext from "../context/AuthContext";

export default function userDashboard() {
  let { regsiterUser } = useContext(AuthContext)

  return (
    <>
    <h1>main dashboard</h1>
    </>
  );
}
