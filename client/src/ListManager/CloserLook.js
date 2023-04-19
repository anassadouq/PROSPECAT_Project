import React, { Component } from "react";
export default class CloserLook extends Component{
    render(){
        return(
            <section class="colser-look text-center">
            <div class="container">
                <div class="main-heading-min">
                    <h3 class="main-h">Closer Look</h3>
                    <p>This simple and easy to use list manager, helps you organize your data <br/> and apply bulk tasks, such as bulk email search or data update.</p>
                </div>
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="video-image">
                            <a href="https://www.youtube.com/embed/Cnfj6QCGLyA" class="popup-youtube">
                                <img src="images/youtube.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}