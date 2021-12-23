import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../utils/useAxios";

const HomePage = () => {
    let { authTokens, logoutUser } = useContext(AuthContext);

    let api = useAxios();

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

            <h1>Home Page</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                            className="card-img-top"
                            alt="Hollywood Sign on The Hill"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                            className="card-img-top"
                            alt="Palm Springs Road"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                            className="card-img-top"
                            alt="Los Angeles Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                            className="card-img-top"
                            alt="Skyscrapers"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
