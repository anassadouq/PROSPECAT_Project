import React, { Component } from "react";
import { Link } from "react-router-dom";
import './ContactUs.css';
export default class ContactUs extends Component{
    render(){
        return(
            <div id="contact_us">
                <div className="container p-4">
                    <h3 id="contact">Contact Us</h3>
                    <p id="paragraphe">Need Help ? Get it right now From our team</p>
                    <Link to='/contact'>
                        <button className="btn rounded-pill my-2" id="btn_see_more">Contact Us NOW</button>
                    </Link>
                </div>
            </div>
        )
    }
}