import React, { Component } from "react";
import './Contact.css';
export default class ContactContent extends Component{
    render(){
        return(
            <div className="row my-5">
                <div className="col-4">         
                    <h1 className="my-5" id="prg">Contact Us</h1>
                    <p className="text-secondary" id="prg2">Get Better Help From Our Teams</p>
                        <button className="btn rounded-pill my-4" id="btn_Leads1">Contact Us Now</button>
                </div>
                <div className="col-8">
                    <img src="./images/contactUs.png" id="img"/>
                </div>
            </div>
        )
    }
}