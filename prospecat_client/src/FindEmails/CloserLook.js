import React, { Component } from "react";
export default class CloserLook extends Component{
    render(){
        return(
            <div className="text-center my-5" id="closerLookBody">
                <h1 className="my-4">Closer Look</h1>
                <p className="text-secondary">Combined with the Email Finder Feature, the Lead Finder is a powerfull tool to get new sales leads and expand your reach.</p>
                <img src="./images/youtube.png" className="my-5" id="video"/>
            </div>
        )
    }
}