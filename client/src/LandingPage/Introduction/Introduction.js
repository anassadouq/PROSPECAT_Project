import React, { Component } from "react";
import './Introduction.css';
export default class Introduction extends Component{
    render(){
        return(
            <div className="row my-5">
                <div className="col-7">
                    <h1 className="my-5" id="prg">It Has Never Been Easier To <br/> Find Leads , Email Adresses...</h1>
                    <p className="text-secondary" id="prg2">Prospecat is a B2B prospecting platform. Use it to <br/>find email addresses and build a quality B2B Data <br/>for your sales funnel.</p>
                    <button className="btn rounded-pill my-2" id="btn_contact">Get started Now For Free</button>
                    <button className="mx-3 btn rounded-pill" id="btn_contact1">Get Chrome Extension</button>
                </div>
                <div className="col-4">
                    <img src="./images/introduction.png" style={{"height":"450px","width":"400px"}} id="img"/>
                </div>
                <span className="my-5"></span>
            </div>
        )
    }
}