import React, { Component } from "react";
import ContactUs from "../Footer/ContactUs/ContactUs";
import ContentDomaine from "./ContentDomaine";
import CloserLook from "./CloserLook";

export default class Domaine extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <ContentDomaine/>
                </div>
                <CloserLook/>
                <ContactUs/>
            </div>
        )
    }
}