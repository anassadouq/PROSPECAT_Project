import React, { Component } from "react";
import { BsYoutube } from "react-icons/bs";
import './Manager.css';
export default class ContentManager extends Component{
    render(){
        return(
            <div className="row my-5">
                <div className="col-8">
                    <h1 className="my-4" id="prg">List Manager</h1>
                    <p className="my-2 text-secondary" id="prg2">This is a simplified CRM to manage your data. You can process a bulk task to find emails of an imported list.</p>
                        <button className="btn rounded-pill my-5" id="btn_Leads1">Take Closer Look</button>
                        <button className="btn rounded-pill mx-4" id="btn_Leads2"><BsYoutube id="youtubeIcon"/> &nbsp;Watch The Video</button>
                </div>
                <div className="col-4">
                    <img src="./images/bigManager.png" style={{"height":"400px","width":"400px"}} id="img"/>
                </div>
                <span className="my-5"></span>
            </div>
        )
    }
}