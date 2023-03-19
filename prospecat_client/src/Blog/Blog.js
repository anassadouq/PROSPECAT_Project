import React, { Component } from "react";
import Header from "./Header/Header";
import Background from "./Background/Background";
import Articles from "./Articles/Articles";
import SeeMore from "./SeeMore/SeeMore";
import ContactUs from "../Footer/ContactUs/ContactUs";
import Footer from "../Footer/Footer/Footer";
import CategorieSearch from "./Articles/CategorieSearch";

export default class Blog extends Component{
  render(){
    return(
      <div>
        <div className="container">
          <Background/>
          <CategorieSearch/>
          <Articles/>
          <SeeMore/>
        </div>
        <ContactUs/>
      </div>
    )
  }
}