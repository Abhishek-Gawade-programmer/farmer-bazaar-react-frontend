import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import AuthContext from "../context/AuthContext";
import useAxios from "../utils/useAxios";
// import Locationmaps from "../components/Locationmaps";

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

export default function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [file, setFile] = useState(null);
  let api = useAxios();

  let setUserDetails = (data) => {
    setFirstName(data.user.first_name);
    setLastName(data.user.last_name);
    setEmail(data.user.email);
    setPhone(data.user.username);
    setBio(data.bio);
  };
  let onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  let onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  let onsetBioChange = (e) => {
    setBio(e.target.value);
  };
  let onLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  let onsetEmailChange = (e) => {
    setEmail(e.target.value);
  };

  let submitUserDetails = async (e) => {
    e.preventDefault();
    let obj = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,

      },
      bio: bio,
      location: {
        "id": 1,
        "in_words": "timnpa45ss very mushgvsdftrf",
        "longitude": "786.5000000000000000",
        "latitude": "767.5000000000000000"
      }
    };
    api
      .put("api/users/user-profile/", obj, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.data.user);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let data = async (e) => {
    console.log("");
  };

  let getUserDetails = async () => {
    api
      .get("api/users/user-profile/")
      .then(function (response) {
        if (response.status === 200) {
          console.log("response data is", response.data);
          setUserDetails(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <hr />
          <MDBCol md="8">
            <h1 className="display-5">My Profile</h1>
            <form onSubmit={submitUserDetails}>
              <div className="mb-3">
                <label htmlFor="firstnamelablel" className="form-label">
                  First Name
                </label>
                <input
                  onChange={onFirstNameChange}
                  value={firstName}
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
                  value={lastName}
                  onChange={onLastNameChange}
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
                  defaultValue={phone}
                  readOnly="readOnly"
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
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  value={email}
                  onChange={onsetEmailChange}
                  required=""
                  type="email"
                  placeholder="Type your email"
                  className="form-control"
                  name="email"
                  id="email"
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="bio" className="form-label">
                  Your Bio
                </label>
                <textarea
                  row="2"
                  value={bio}
                  onChange={onsetBioChange}
                  required=""
                  type="text"
                  placeholder="Type your Bio Here"
                  className="form-control"
                  name="bio"
                  id="bio"
                />
              </div>
              <div className="input-group-lg">
                <div className="custom-file">
                  <input
                    type="file"
                    accept="image/*"
                    className="custom-file-input "
                    id="customFile"
                    onChange={onFileChange}
                  />
                </div>
              </div>
              <hr />
              <div className="input-group-lg">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  id="check_agree"
                />
                <span htmlFor="check_agree">
                  to activatre yooiu need to aggre thres and consions
                </span>
              </div>

              <div className="text-center mt-4">
                <input
                  type="submit"
                  className="btn btn-lg btn-primary"
                  value=" Save my changes"
                />
              </div>
            </form>
            <hr />
          </MDBCol>
        </MDBRow>
        {/* <Locationmaps></Locationmaps> */}
      </MDBContainer>
    </>
  );
}
