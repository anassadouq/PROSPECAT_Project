import React, { Component } from "react";
import { BsYoutube } from "react-icons/bs";
import './Leads.css';
export default class ContentLeads extends Component{
    render(){
        return(
            <div className="row my-5">
                <div className="col-8">
                    <h1 className="my-3" id="title2">Find new leads</h1>
                    <p className="text-secondary" id="paragraphe">Enter your search criterea in a form to get back a matching business leads data within seconds (name, job title, current company ...)</p>
                        <button className="btn rounded-pill my-2" id="btn_Leads1">Take Closer Look</button> &nbsp;
                        <button className="btn rounded-pill" id="btn_Leads2"><BsYoutube id="youtubeIcon"/> &nbsp;Watch The Video</button>
                </div>
                <div className="col-4">
                    <img src="./images/bigLeads.png" style={{"height":"400px","width":"400px"}} id="img"/>
                </div>
            </div>
        )
    }
}