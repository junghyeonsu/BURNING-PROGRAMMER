import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

import HomeButtonImage from '../../../images/HomeButton.PNG'
import '../../../styles/HeaderText.css'


@inject('store')
@observer
class HomeButton extends Component {

    render() {
        const { store } = this.props;
        return(
            <div>
                <Link to="/">
                    <img onClick={store.onClickHomeButton} id="HomeButton" src={HomeButtonImage}></img>
                </Link>
            </div>
        );
    }
}

export default HomeButton;