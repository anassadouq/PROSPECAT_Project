import React, { Component } from "react";
import { BsYoutube } from "react-icons/bs";
import './Domaine';
export default class ContentDomaine extends Component{
    render(){
        return(
            <section class="main-banner service-banner offset-top">
            <div class="container">
                <div class="row align-items-center full-height">
                    <div class="col-md-7 center-sm">
                        <h1 class="main-heading">Domain And <br/>Company Search</h1>
                        <p class="main-heading-para">Use a company name to find it's valuable emails and employees.</p>
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
                        <img src="images/bigDomaine.png" class="img-fluid m-auto service-img" alt="It has never been easier to find Leads , Email adresses..."/>
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