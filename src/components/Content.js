import React, {Component} from 'react';
import '../styles/Content.css' 

class Content extends Component {
    state = {
        language : [this.props.language],
    }

    render(){
        return(
            <div className="Content">
                <img className="Image" src={this.props.image}></img>
                <br />
                {this.props.name}
            </div>
        );
    }
}

export default Content;