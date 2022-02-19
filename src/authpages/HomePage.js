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
    const [currentCategory, setCurrentCategory] = useState("All items");
    let api = useAxios();
    let getSearchItems = (itemTitle) => {
        if (currentCategory === "All items" && itemTitle) {
            console.log("semnfong yth reqtesuy", itemTitle);
            axios
                .get(
                    process.env.REACT_APP_API_HOST_URL +
                        "/api/items/create-list-item/" +
                        `?title=${itemTitle}`
                )
                .then(function (response) {
                    setItemList(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else if (itemTitle.length) {
            axios
                .get(
                    process.env.REACT_APP_API_HOST_URL +`/api/items/create-list-item/?title=${itemTitle}&category=${currentCategory}`
                )
                .then(function (response) {
                    setItemList(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log("do sopthiong wrt dg", currentCategory);
        }
    };

    let searchItems = (e) => {
        e.preventDefault();
        console.log("queet", e.target.search.value);
        if (e.target.search.value.length) {
            getSearchItems(e.target.search.value);
        } else {
            getItems();
        }
    };

    let getCategories = () => {
        axios
            .get(
                process.env.REACT_APP_API_HOST_URL + "/api/items/all-category/"
            )
            .then(function (response) {
                console.log("all categories data", response.data);
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    let getItems = () => {
        axios
            .get(
                process.env.REACT_APP_API_HOST_URL +
                    "/api/items/create-list-item/"
            )
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response.data :>> ", response.data);
                    setItemList(response.data.results);
                    setCurrentCategory("All items");
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
                    `/api/items/create-list-item/?category=${categoryName}`
            )
            .then(function (response) {
                if (response.status === 200) {
                    setItemList(response.data.results);
                    setCurrentCategory(categoryName);
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        console.log("Before reload");

        console.log("After reload");
        getItems();
        getCategories();
    }, []);

    return (
        <div className="container">
            <form onSubmit={searchItems}>
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
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        name="search"
                    />
                    <div className="input-group-append">
                        <input
                            type="submit"
                            className="btn btn-lg btn-primary"
                            value="Search"
                        />
                    </div>
                </div>
            </form>
            <div className="card">
                <div className="card-body">
                    <h2>
                        <span
                            style={{ cursor: "pointer" }}
                            className="badge badge-primary"
                            onClick={() => getItems()}
                        >
                            All Items
                        </span>
                        {categories.map((category, index) => (
                            <span
                                style={{ cursor: "pointer" }}
                                className={`badge badge-${category.color} mx-1`}
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
