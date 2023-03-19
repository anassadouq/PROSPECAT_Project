import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'; 
export default class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <img src="./images/logo.png"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Features
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active mx-2" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active mx-2" href="#">Blog</a>
                            </li>
                        </ul>
                            <button className="d-flex btn btn-success rounded-pill" id="button" type="submit">Chrome Extension</button>
                    </div>
                </div>
            </nav>
        )
    }
}