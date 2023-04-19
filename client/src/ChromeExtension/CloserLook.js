import React, { Component } from "react";
export default class CloserLook extends Component{
    render(){
        return(
            <section class="closer-look">
            <div class="container">
                <h2 class="text-center">Closer look on Prospecat Extension</h2>
                <div class="closer-look-item text-center">
                    <h3>Find emails on Linkedin Profiles</h3>
                    <p>Get business emails by a single click from a Linkedin profile and save your data <br/> into your list manager.</p>
                    <img src="/images/chromeimage1.png" alt="Image single click" class="img-fluid"/>                
                </div>
                <div class="closer-look-item text-center">
                    <h3>Export search results from LinkedIn</h3>
                    <p>Make your bulk tasks easier by extracting your Linkedin search results and save <br/> them into your list manager.</p>
                    <img src="/images/chromeimage2.png" alt="Image single click" class="img-fluid"/>                
                </div>
            </div>
            <div class="mouse-scroll">
                <div>
                    <span></span>
                </div>
            </div>
        </section>
        )
    }
}