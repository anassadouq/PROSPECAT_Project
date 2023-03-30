import React, { Component } from "react";
import ContactContent from "./ContactContent";
import ContactButton from "../LandingPage/ContactUsLandingPage/ContactButton";
import Contacte from "../LandingPage/ContactUsLandingPage/Contact";
import EmailUs from "./EmailUs";

export default class Contact extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <ContactContent/>
                    <Contacte/>
                    <ContactButton/><br/><hr/>
                </div>
                <EmailUs/>
            </div>
        )
    }
}