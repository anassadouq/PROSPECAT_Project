import React, { Component } from "react";
import './GetStarted.css';
export default class GetStarted extends Component{
    render(){
        return(
            <div id="get_started">
                <div className="container p-5 text-center">
                    <h1 id="get_started_title">Get started Now</h1>
                    <p id="paragraphe">Grab your free account and start prospecting now.</p>
                    <center>
                        <button className="btn btn-success rounded-pill" id="btn_contact1">SIGNUP FOR FREE</button>
                    </center>
                </div>
            </div>
        )
    }
}