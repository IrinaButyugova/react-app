import React from "react";
import SearchPlugin from "./SearchPlugin";
import Item from "./Item";

export default class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};
                          
        this.filterList = this.filterList.bind(this);
    }
             
    filterList(text){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(text.toLowerCase())!== -1;
        }); 
        this.setState({items: filteredList});
    }
              
    render() {
        return(
            <div>         
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}