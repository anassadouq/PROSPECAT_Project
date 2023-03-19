import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'; 
export default class Header extends Component{
    render(){
        return(
            <nav className="container row">
                <div className="col-3">
                    <Link to='/'>
                        <img src="./images/logo.png" id="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col-6 my-3">
                <span className="mx-4"><Link to="/landing_page">About</Link></span>
                    <span className="mx-4"><Link to="/features">Features</Link></span>
                    <span className="mx-4"><Link to="/pricing_plan">Pricing</Link></span>
                    <span className="mx-4"><Link to="/">Blog</Link></span>
                </div>
                <div className="col-3 my-2">
                    <button className="btn btn-success rounded-pill text-center" id="button">chrome Extension</button>
                </div>
            </nav>
        )
    }
}