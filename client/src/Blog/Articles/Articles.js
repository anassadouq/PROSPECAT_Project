import React,{Component} from "react";
import ArticlesInfo from "../Articles/ArticlesInfo";
import ArticlesItem from "./ArticlesItem";
class Articles extends Component{
    constructor(){
        super()
        this.state = { ArticlesInfo : ArticlesInfo }
    }
    mapping(x){
        const Articles = x.map ( member => 
        <ArticlesItem
            key={member.id}
            img={member.img}
            title={member.title}
            by={member.by}
            date={member.date}
            content={member.content}
        />);
        return Articles;  
    }
    render(){
        return(
            <div className="row">
                {this.mapping(this.state.ArticlesInfo)}
            </div>
        )
    }
}
export default Articles;