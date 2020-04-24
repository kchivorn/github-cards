import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return ( 
            <div className="github-profile">
                <img src={this.props.avatar_url} alt="placeholder" />
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
        );
    }
}
 
export default Card;