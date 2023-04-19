import React, { Component } from "react";
export default class ContentLeads extends Component{
    render(){
        return(
            <section class="main-banner service-banner offset-top">
            <div class="container">
                <div class="row align-items-center full-height">
                    <div class="col-md-7 center-sm">
                        <h1 class="main-heading">Find new leads</h1>
                        <p class="main-heading-para">Prospecat is a B2B prospecting platform. Use it to find email addresses and build a quality B2B Data for your sales funnel.Enter your search criterea in a form to get back a matching business leads data within seconds (name, job title, current company ...)</p>
                        <div class="main-actions">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="" class="btn-main btn-large">Take Closer Look</a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://www.youtube.com/embed/Cnfj6QCGLyA" class="btn-main btn-green btn-large popup-youtube"><i class="fa fa-youtube"></i> Watch The Video</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5 d-none d-md-block">
                        <img src="images/bigLeads.png" class="img-fluid m-auto service-img" alt="It has never been easier to find Leads , Email adresses..."/>
                    </div>
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