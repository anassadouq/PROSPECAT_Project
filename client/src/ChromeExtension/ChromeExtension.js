import React, { Component } from "react";
import ChromeContent from "./ChromeContent";
import CloserLook from "./CloserLook";
import ContactUs from "../Footer/ContactUs/ContactUs";
import DataUpdate from "./DataUpdate"

export default class ChromeExtension extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <ChromeContent/>
                    <CloserLook/>
                </div>
                <DataUpdate/>
                <ContactUs/>
            </div>
        )
    }
}