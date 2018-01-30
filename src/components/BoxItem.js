import React, { Component } from 'react';
import '../Button.css';

class BoxItem extends Component {
    render(){
        return(
            <img alt={this.props.slug} src={this.props.gif}></img>
        );
    }
}

export default BoxItem;