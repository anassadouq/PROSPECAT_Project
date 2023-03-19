import React, { Component } from "react";
import WhatProspecat from './WhatProspecat/WhatProspecat';
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import PricingPlan from "./PricingPlan/PricingPlan";
import GetStarted from "./GetStarted/GetStarted";
import ContactTitle from "./ContactUsLandingPage/ContactTitle";
import Contact from "./ContactUsLandingPage/Contact";
import ContactButton from "./ContactUsLandingPage/ContactButton";

export default class LandingPage extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <WhatProspecat/>
                    <ProductFeatures/>
                </div>
                
                <PricingPlan/>
                <GetStarted/>
                <div className="container">
                    <ContactTitle/>
                    <Contact/>
                    <ContactButton/>
                </div>                
            </div>
        )
    }
}