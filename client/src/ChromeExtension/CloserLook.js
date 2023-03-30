import React, { Component } from "react";
import './Chrome.css';
export default class CloserLook extends Component{
    render(){
        return(
            <div className="text-center">
                <div>
                    <h2 className="my-2" id="title">Closer look on Prospecat Extension</h2>
                    <h3 className="my-5">Find emails on Linkedin Profiles</h3>
                    <p className="text-secondary" id="text">Get business emails by a single click from a Linkedin profile and save your data into your list manager.</p>
                    <img src="./images/chromeImage1.png"/>
                    <h3 className="my-4">Export search results from LinkedIn</h3>
                    <p id="text">Make your bulk tasks easier by extracting your Linkedin search results and save them into your list manager.</p>
                    <img src="./images/chromeImage2.png"/>


                </div>
            </div>
        )
    }
}