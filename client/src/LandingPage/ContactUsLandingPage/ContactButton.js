import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ContactButton extends Component{
    render(){
        return(
            <center>
                <div class="or">
                    <span>OR</span>
                </div>
                <Link to='/contact'>
                    <button className="btn rounded-pill my-4" id="btn_contact">CHAT WITH US</button>
                </Link>
            </center>
        )
    }
}