import React, {Component} from 'react';
import '../styles/FireEffect.css' 

class FireEffect extends Component {
    render(){
        return(
            <div className="fire">
                <div className="flames">
                    <div className="flame"></div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                    <div className="flame"></div>
                </div> 
                {this.props.children}
            </div>
        );
    }
}

export default FireEffect;