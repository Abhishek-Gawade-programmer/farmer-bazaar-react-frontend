import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../utils/useAxios";
import ItemCard from "../components/subcomponents/ItemCard.js";

const HomePage = () => {
    let { authTokens, logoutUser } = useContext(AuthContext);
    const [itemList, setItemList] = useState([]);
    let api = useAxios();
    let getItems = () => {
        api.get("api/items/all-items/")
            .then(function (response) {
                if (response.status === 200) {
                    console.log(
                        "response data is",
                        response.data,
                        typeof response.data
                    );
                    setItemList(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        getItems();
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

            <h1>Tending Items</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4" >
            {itemList.map((item) => (
                <ItemCard item={item} key={item.id}></ItemCard>
            ))}
                </div>
        </div>
    );
};

export default HomePage;
