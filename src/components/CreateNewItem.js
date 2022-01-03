import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

const CreateNewItem = () => {
  const [categories, setCategories] = useState([]);
  let unitsList = "Ton, Kg, Gram, Box, Bag, Piece, Liter, ml, Feet, Acre".split(
    ","
  );
  let submitItemDetails = (e) => {
    e.preventDefault();
    let itemFormData = new FormData();
    console.log("title", e.target.item_name.value);
    // console.log("category_value", e.target.date_value.value);
    itemFormData.append("category", e.target.item_name.value);
  };

  let getCategories = () => {
    axios
      .get("http://10.20.0.170/api/items/all-categoty/")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <hr />
          <MDBCol md="8">
            <h1 className="display-5">Create New Item</h1>
            <form onSubmit={submitItemDetails}>
              <div className="mb-3">
                <label htmlFor="categorylabel" className="form-label">
                  Choose Your Item Category
                </label>
                <div className="input-group mb-3">
                  <select
                    className=" form-control custom-select"
                    id="categorylabel"
                    name="category_value"
                    // required="required"
                  >
                    <option defaultValue="" required="required">
                      Select Category
                    </option>
                    {categories.map((category) => (
                      <option
                        value={category.name}
                        key={category.id}
                        required="required"
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="titleamelablel" className="form-label">
                  Enter The Title Name
                </label>
                <input
                  required=""
                  type="text"
                  required="required"
                  className="form-control"
                  name="name_value"
                  id="titleamelablel"
                  placeholder="Title Name"
                  aria-describedby="titlenameHelp"
                />
                <div id="titleamelablel" className="form-text">
                  Title of item which you want to publish
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="dateitemlablel" className="form-label">
                  Select Available date
                </label>
                <input
                  required=""
                  type="date"
                  required="required"
                  className="form-control"
                  name="date_value"
                  id="dateitemlablel"
                  placeholder="Title Name"
                  aria-describedby="titlenameHelp"
                />
                <div id="dateitemlablel" className="form-text">
                  Last date by which item will be available
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="descriptionlabel" className="form-label">
                  Description of Item
                </label>
                <textarea
                  row="2"
                  required=""
                  type="text"
                  required="required"
                  placeholder="Type your Description Here"
                  className="form-control"
                  name="bio"
                  id="bio"
                />
                <div id="lastnameHelp" className="form-text">
                  Enter Description of your item why should buyers to buy them?
                </div>
              </div>

              <label htmlFor="quantitylabel" className="form-label">
                Enter Quantity of item
              </label>
              <div className="input-group mb-3">
                <input
                  required="required"
                  type="number"
                  maxLength="10"
                  className="form-control"
                  placeholder="Quantity Number"
                  name="username"
                  aria-label="Quantity Number"
                  aria-describedby="phonehelp"
                  id="quantitylabel"
                />{" "}
              </div>

              {unitsList.map((unit, index) => (
                <span key={index}>
                  <input
                    required="required"
                    type="radio"
                    id={index}
                    name="unit"
                    className="custom-control-input mr-3 pr-4"
                  />
                  <label className="custom-control-label" htmlFor={index}>
                    {unit}
                  </label>
                </span>
              ))}

              <hr />

              <label htmlFor="quantitylabel" className="form-label">
                Enter Expected of Price item
              </label>
              <div className="input-group mb-3">
                <input
                  required="required"
                  type="number"
                  maxLength="10"
                  className="form-control"
                  placeholder="Expected of Price"
                  name="username"
                  aria-label="Expected of Price"
                  aria-describedby="phonehelp"
                  id="quantitylabel"
                />
              </div>
              <div className="input-group-lg">
                <div className="custom-file">
                  <input
                    required="required"
                    type="file"
                    multiple="multiple"
                    accept="image/*"
                    className="custom-file-input "
                    id="customFile"
                  />
                </div>
              </div>
              <hr />
              <div className="text-center mt-4">
                <input
                  type="submit"
                  className="btn btn-lg btn-primary"
                  value="Create New Item"
                />
              </div>
            </form>
            <hr />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default CreateNewItem;
