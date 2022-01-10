import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../utils/useAxios";
import ItemCard from "../components/subcomponents/ItemCard.js";
import axios from "axios";
const HomePage = () => {
    let { authTokens, logoutUser } = useContext(AuthContext);
    const [itemList, setItemList] = useState([]);
    const isCancelled = React.useRef(false);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('All items');
    let api = useAxios();

    let getCategories = () => {
        axios
            .get(
                process.env.REACT_APP_API_HOST_URL + "/api/items/all-categoty/"
            )
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    let getItems = () => {
        api.get("api/items/create-list-item/")
            .then(function (response) {
                if (response.status === 200) {
                    console.log('response.data :>> ', response.data);
                    setItemList(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    let getCategoryItems = (categoryName) => {
        console.log("categoryName", categoryName);
        axios
            .get(
                process.env.REACT_APP_API_HOST_URL +
                `/api/items/sort-item-category/${categoryName}`
            )
            .then(function (response) {
                if (response.status === 200) {
                    setItemList(response.data);
                    setCurrentCategory(categoryName);
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        console.log('Before reload');

        console.log('After reload');
        getItems();
        getCategories();
    }, []);

    return (
        <div className="container">
            <div className="input-group input-group-lg mb-3 mt-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="fas fa-camera fa-2x"></i>
                    </span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search 1000+ Products"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="search"
                />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="fas fa-search fa-2x"></i>
                    </span>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h2>
                        <span style={{ cursor: "pointer" }}
                            className="badge badge-primary"
                            onClick={() => getItems()}
                        >
                            All Items
                        </span>
                        {categories.map((category, index) => (
                            <span style={{ cursor: "pointer" }}
                                className="badge badge-primary mx-1"
                                key={index}
                                onClick={() =>
                                    getCategoryItems(`${category.name}`)
                                }
                            >
                                {category.name}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>
            <br />

            <h2>{currentCategory} </h2>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {itemList.map((item) => (
                    <ItemCard item={item} key={item.id}></ItemCard>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
