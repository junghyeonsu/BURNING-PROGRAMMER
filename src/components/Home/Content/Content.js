import React, {Component} from 'react';
import '../../../styles/Content.css' 
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Content extends Component {
    render(){
        const { store } = this.props;
        return(
            <div className="Content">
                <Link to={this.props.name} onClick={store.hideSidebarAndMoveTop}>
                    <img src={this.props.image}></img>
                    <br />
                    <div className="Text">
                        {this.props.name}
                    </div>
                </Link>
            </div>
        );
    }
}
export default Content;