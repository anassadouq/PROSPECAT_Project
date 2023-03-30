import React, { Component } from "react";
import './Background.css'; 
export default class Background extends Component{
    render(){
        return(
            <div>
                <img src="./images/state_image.png" className="my-5" id="state_image"/>
            </div>
        )
    }
}