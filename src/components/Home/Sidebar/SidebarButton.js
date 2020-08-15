import React, {Component} from 'react';
import '../../../styles/SidebarButton.css' 
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

/*
id = 클릭했을 때 children을 부모에게 넘겨줌
onClick = 부모가 click으로 넘겨준 함수를 실행
*/
@inject('store')
@observer
class SidebarButton extends Component {    
    render(){
        const { store } = this.props;
        return(
            <Link onClick={store.hideSidebarAndMoveTop} style={{textDecoration: 'none'}} to={this.props.children}>
                <div id={this.props.children} onClick={store.changePresentLanguage} className="btn btn-three">
                    <span>{this.props.children}</span>
                </div>
            </Link>
        );
    }
} 

export default SidebarButton;