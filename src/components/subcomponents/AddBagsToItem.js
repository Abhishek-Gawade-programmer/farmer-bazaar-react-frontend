import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
// import AuthContext from "../context/AuthContext";
// import useAxios from "../utils/useAxios";
// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const AddBagsToItem = ({ match, history }) => {
  let getItem = async () => {
    console.log(match, history);
  };

  useEffect(() => {
    getItem();
  }, []);

  return <h1>cREATING BAGS FOR SOTHTING </h1>;
};

export default AddBagsToItem;
