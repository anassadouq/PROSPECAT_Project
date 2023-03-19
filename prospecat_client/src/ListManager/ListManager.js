import React, { Component } from "react";
import ContactUs from "../Footer/ContactUs/ContactUs";
import ContentManager from "./ContentManager";
import CloserLook from "./CloserLook";

export default class FindEmails extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <ContentManager/>
                </div>
                <CloserLook/>
                <ContactUs/>
            </div>
        )
    }
}