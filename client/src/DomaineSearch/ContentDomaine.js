import React, { Component } from "react";
import { BsYoutube } from "react-icons/bs";
import './Domaine';
export default class ContentDomaine extends Component{
    render(){
        return(
            <div className="row my-5">
                <div className="col-8">
                    <h1 className="my-3" id="prg">Domain And <br/>Company Search</h1>
                    <p className="text-secondary" id="paragraphe">Use a company name to find it's valuable emails and employees.</p>
                        <button className="btn rounded-pill my-2" id="btn_Leads1">Take Closer Look</button>
                        <button className="btn rounded-pill mx-3" id="btn_Leads2"><BsYoutube id="youtubeIcon"/> &nbsp;Watch The Video</button>
                </div>
                <div className="col-4">
                    <img src="./images/bigDomaine.png" style={{"height":"350px","width":"400px"}} id="img"/>
                </div>
                <span className="my-5"></span>
            </div>
        )
    }
}