import React, { Component } from "react";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Emails.css';
export default class ContentEmails extends Component{
    render(){
        return(
            <div className="row my-5">
                <div className="col-8">
                    <h1 className="my-4" id="prg">Find emails</h1>
                    <p className="text-secondary" id="prg2">Having a lead's name and current company, you can get his business email address in a second.</p>
                        <Link to="/features">
                            <button className="btn rounded-pill my-2" id="btn_Leads1">SEE MORE FEATURES</button>
                        </Link>
                        <button className="mx-3 btn rounded-pill" id="btn_Leads2"><BsYoutube id="youtubeIcon"/> &nbsp;Watch The Video</button>
                </div>
                <div className="col-4">
                    <img src="./images/bigEmail.png" style={{"height":"400px","width":"400px"}} id="img"/>
                </div>
                <span className="my-5"></span>
            </div>
        )
    }
}