import React,{Component} from "react";
import ProductFeaturesInfo from "../ProductFeatures/ProductFeaturesInfo";
import ProductFeaturesItem from "./ProductFeaturesItem";
import './ProductFeatures.css';
export default class ProductFeatures extends Component{
    constructor(){
        super()
        this.state = { ProductFeaturesInfo : ProductFeaturesInfo }
    }
    mapping(x){
        const ProductFeatures = x.map ( ProductFeature => 
        <ProductFeaturesItem
            key={ProductFeature.id}
            img={ProductFeature.img}
            title={ProductFeature.title}
            content={ProductFeature.content}
        />);
        return ProductFeatures;  
    }
    render(){
        return(
            <div className="row" id="all">
                <h2 className="text-center my-5" style={{"fontWeight":"bold"}}>Product & Features</h2>
                {this.mapping(this.state.ProductFeaturesInfo)}
                <center><button className="btn rounded-pill my-4" id="btn_features">SEE MORE FEATURES</button></center>

            </div>
        )
    }
}