import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import useAxios from "../utils/useAxios";
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
  let api = useAxios();
  let submitItemDetails = (e) => {
    e.preventDefault();
    let itemFormData = new FormData();
    console.log("name_value", e.target.name_value.value);
    console.log("quantity_value", e.target.quantity_value.value);
    console.log("description_value", e.target.description_value.value);
    console.log("date_value", e.target.date_value.value);
    console.log("category_value", e.target.category_value.value);
    console.log("unit", e.target.unit.value);
    console.log("expected_price_value", e.target.expected_price_value.value);
    console.log("images_value", e.target.images_value.files);

    itemFormData.append("category", e.target.category_value.value);
    itemFormData.append("title", e.target.name_value.value);
    itemFormData.append("available_date", e.target.date_value.value);
    itemFormData.append("description", e.target.description_value.value);
    itemFormData.append("quantity", e.target.quantity_value.value);
    itemFormData.append("quantity_unit", "Kg");
    itemFormData.append("expected_price", e.target.expected_price_value.value);
    itemFormData.append("location_in_words", location.address);
    itemFormData.append("location_longitude", location.lng);
    itemFormData.append("location_latitude", location.lat);
    window.loc=e.target.images_value.files
    itemFormData.append("images", e.target.images_value.files[0]);
    console.log("itemFormData", itemFormData);

    api
      .post("api/items/create-list-item/", itemFormData)
      .then(function (response) {
        if (response.status === 200) {
          // setItemList(response.data);
          console.log("gettign dfatta");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let getCategories = () => {
    axios
      .get(process.env.REACT_APP_API_HOST_URL+"/api/items/all-categoty/")
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
 
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
                  name="description_value"
                  id="descriptionlabel"
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
                  name="quantity_value"
                  aria-label="Quantity Number"
                  aria-describedby="phonehelp"
                  id="quantitylabel"
                />
              </div>

              {unitsList.map((unit, index) => (
                <span key={index}>
                  <input
                    required="required"
                    type="radio"
                    id={index}
                    name="unit"
                    value={unit}
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
                  name="expected_price_value"
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
                    name="images_value"
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
