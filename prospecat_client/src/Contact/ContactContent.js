import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Contact.css';
export default class ContactContent extends Component{
    render(){
        return(
            <div className="row my-5">
                <div className="col-4">
                    <Link to="/contact">
                        <h1 className="my-4" id="title2">Contact Us</h1>
                    </Link>
                    <p className="text-secondary" id="paragraphe">Get Better Help From Our Teams</p>
                        <button className="btn rounded-pill my-4" id="btn_Leads1">Contact Us Now</button>
                </div>
                <div className="col-8">
                    <img src="./images/contactUs.png" id="img"/>
                </div>
            </div>
        )
    }
}