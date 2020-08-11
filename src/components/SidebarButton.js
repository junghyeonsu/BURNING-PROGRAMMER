import React, {Component} from 'react';
import '../styles/SidebarButton.css' 

/*
id = 클릭했을 때 children을 부모에게 넘겨줌
onClick = 부모가 click으로 넘겨준 함수를 실행
*/
class SidebarButton extends Component {
    render(){
        return(
            <div id={this.props.children} onClick={this.props.click} className="btn btn-three">
                    <span>{this.props.children}</span>
            </div>
        );
    }
}

export default SidebarButton;