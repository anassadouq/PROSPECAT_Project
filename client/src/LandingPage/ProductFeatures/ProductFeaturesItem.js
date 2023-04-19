import React, { Component } from "react";
export default class ProductFeaturesItem extends Component{
    render(){
        return(
            <div className="card mx-4 my-4 text-center col-5">
                <div className="card-body">
                    <img src={this.props.img}/><br/>
                    <b id="titleBold">{this.props.title}.</b>
                    <p className="text-secondary">{this.props.content}.</p>
                </div>
            </div>
        );
    }
}