import React, {Component} from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

import ContentContainer from './components/ContentContainer';
import Sidebar from './components/Sidebar';
import HeaderText from './components/HeaderText';

import { Transition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Link } from 'react-router-dom';


// https://www.npmjs.com/package/react-animation-components 참고할거임.

import Container from './components/ContentContainer';
import Python from './components/Python/Python';

@inject('store')
@observer
class App extends Component {
   render() {
    return (
      <Router>

        <div className="item-main">
          <HeaderText />
          <p>{!this.state.view ? <Link onClick={this.onClickhandler} to="/">홈으로</Link>: ""}</p>
        </div>

        {this.state.view ?
        <div className="App">
          <div className="sidebar">
            <Sidebar width={200} height={"100vh"} />
          </div>
          <div className="container-main">
            <div className="container-content">
              <ContentContainer onClick={this.onClickhandler} />
            </div>
          </div>
        </div>
        
        :""}
        
        <Switch>
          <Route exact path="/python" component={Python}/>
        </Switch>
      </Router>

    );
  }
}

export default App;