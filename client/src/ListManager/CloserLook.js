import React, { Component } from "react";
export default class CloserLook extends Component{
    render(){
        return(
            <div className="text-center my-5" id="closerLookBody">
                <h1 className="my-4">Closer Look</h1>
                <p className="text-secondary">This simple and easy to use list manager, helps you organize your data and apply bulk tasks, such as bulk email search or data update.</p>
                <img src="./images/youtube.png" className="my-5" id="video"/>
            </div>
        )
    }
}