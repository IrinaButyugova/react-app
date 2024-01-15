import React from "react";

export default class SearchPlugin extends React.Component{
             
    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }
             
    onTextChanged(e){
        var text = e.target.value.trim();
        this.props.filter(text);
    }
             
    render() {
        return <input placeholder="Search" onChange={this.onTextChanged} />;
    }
}