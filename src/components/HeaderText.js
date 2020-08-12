import React, {Component} from 'react';
import '../styles/HeaderText.css' 

const text = ["불", "타", "는"];

class HeaderText extends Component {
    render(){
        return(
            <div>
                {text.map( e => {
                    return(
                    <div className="fire">
                        <div className="flames">
                            <div className="flame"></div>
                            <div className="flame"></div>
                            <div className="flame"></div>
                            <div className="flame"></div>
                        </div> 
                        {e}
                    </div>
                    )
                })}
                개발자
            </div>
        );
    }
}

export default HeaderText;