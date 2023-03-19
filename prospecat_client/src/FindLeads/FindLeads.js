import React, { Component } from "react";
import ContactUs from "../Footer/ContactUs/ContactUs";
import ContentLeads from "./ContentLeads";
import CloserLook from "./CloserLook";

export default class FindLeads extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <ContentLeads/>
                </div>
                <CloserLook/>
                <ContactUs/>
            </div>
        )
    }
}