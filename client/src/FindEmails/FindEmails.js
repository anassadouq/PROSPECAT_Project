import React, { Component } from "react";
import ContactUs from "../Footer/ContactUs/ContactUs";
import ContentEmails from "./ContentEmails";
import CloserLook from "./CloserLook";

export default class FindEmails extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <ContentEmails/>
                </div>
                <CloserLook/>
                <ContactUs/>
            </div>
        )
    }
}