import React, {Component} from 'react';
import '../styles/Content.css' 

class Content extends Component {
    state = {
        language : [this.props.language],
    }

    render(){
        return(
            <div className="Content">
                <a href="#">
                <img src={this.props.image}></img>
                <br />
                <div className="Text">
                    {this.props.name}
                </div>
                </a>
            </div>
        );
    }
}

export default Content;