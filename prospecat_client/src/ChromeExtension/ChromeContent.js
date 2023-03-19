import React, { Component } from "react";
import './Chrome.css';
export default class ChromeContent extends Component{
    render(){
        return(
            <div className="row my-5" id="all">
                <div className="col-8">
                    <h1 className="my-5 text-center" id="prg">Extract Search Results and Find Emails On LinkedIn</h1>
                    <p className="text-secondary" id="prg2">Prospecat Chrome Extension. A must have productivity tool.</p>
                    <div className="row">
                        <center>
                            <button className="btn rounded-pill my-4" id="btn_Leads2">Install Chrome Extension for FREE </button>
                            <button className="btn rounded-pill my-2 mx-3" id="btn_Leads1">Signup for Free</button>
                        </center>
                        
                    </div>
                </div>
                <div className="col-4 my-5">
                    <img src="./images/chrome.png" style={{"height":"350px"}} id="img"/>
                </div>
            </div>
        )
    }
}